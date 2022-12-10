// Eval with extra options

export type EvalError =
  | { type: 'Timeout' }
  | { type: 'SyntaxError'; message: string }
  | { type: 'RuntimeError'; message: string }
  | { type: 'NotAFunction' }

function makeWorker(fn: string) {
  const response = '(' + fn + ')()'
  const blob = new Blob([response], { type: 'application/javascript' })
  return new Worker(URL.createObjectURL(blob))
}

const LONG_TIMEOUT = 1000 * 60 * 60 * 24

// Thanks to https://stackoverflow.com/a/50306125
async function limitedEval(code: string, ms: number) {
  return new Promise((resolve, reject) => {
    const worker = makeWorker(`function () {
      self.onmessage = (e) => {
        try {
          self.postMessage({success: true, result: eval(e.data)})
        } catch (err) {
          if (err instanceof SyntaxError) self.postMessage({success: false, type: 'SyntaxError', message: err.message});
          else self.postMessage({success: false, type: 'RuntimeError', message: err.message});
        }
      }
    }`)
    const timeout = setTimeout(() => {
      worker.terminate()
      reject({ type: 'Timeout' })
    }, ms)
    worker.onmessage = (e) => {
      clearTimeout(timeout)
      worker.terminate()
      if (e.data.success) resolve(e.data.result)
      else reject(e.data)
    }
    worker.postMessage(code)
  })
}

// Also throws EvalError
async function checkSyntax(code: string): Promise<void> {
  try {
    new Function(code)
  } catch (e_fn) {
    // 'new Function()' will catch errors, but won't give us the right errors. So we still use a worker once we know there is an error.
    if (e_fn instanceof SyntaxError) {
      await limitedEval(code, 1000)
    } else {
      throw new Error(`Unknown non-syntax error: ${(e_fn as any).message}`)
    }
  }
}

// Evaluates and returns a value
export async function evalValue(
  code: string,
  options: {
    timeout?: number
  }
): Promise<any> {
  await checkSyntax(code)
  return limitedEval(`(() => (${code}))()`, options.timeout || LONG_TIMEOUT)
}

async function limitedEvalFunction(
  code: string,
  ms: number
): Promise<{ fnName: string; call: (args: any[]) => Promise<any> }> {
  return new Promise((resolve, reject) => {
    // NB: we don't have to check for syntax errors here because we already did that in evalFunction
    const worker = makeWorker(`function () {
      let fn
      self.onmessage = (e) => {
        switch (e.data.action) {
          case 'init':
            try {
              fn = eval(e.data.code)
            } catch (err) {
              self.postMessage({success: false, type: 'RuntimeError', message: err.message})
            }
            if (typeof fn !== 'function') self.postMessage({ success: false, type: 'NotAFunction' })
            else self.postMessage({success: true, fnName: fn.name })
            break
          case 'call':
            try {
              self.postMessage({success: true, result: fn(...e.data.args)})
            } catch (err) {
              self.postMessage({success: false, type: 'RuntimeError', message: err.message})
            }
            break
        }
      }
    }`)
    const timeout = setTimeout(() => {
      worker.terminate()
      reject({ type: 'Timeout' })
    }, ms)
    worker.onmessage = (e) => {
      clearTimeout(timeout)
      if (e.data.success) {
        resolve({
          fnName: e.data.fnName,
          call: async (args: any[]) => {
            return new Promise((resolve, reject) => {
              const call_timeout = setTimeout(() => {
                worker.terminate()
                reject({ type: 'Timeout' })
              }, ms)
              worker.onmessage = (e) => {
                clearTimeout(call_timeout)
                if (e.data.success) resolve(e.data.result)
                else reject(e.data)
              }
              worker.postMessage({ action: 'call', args })
            })
          },
        })
      } else {
        worker.terminate()
        reject(e.data)
      }
    }
    worker.postMessage({ action: 'init', code })
  })
}

// Evaluates and returns a worker that can be used to perform further evals.
//
// If the worker times out during a 'call', it will die and you won't be able to use it anymore.
export async function evalFunction(
  code: string,
  options: {
    timeout?: number
  }
): Promise<{ fnName: string; call: (args: any[]) => Promise<any> }> {
  await checkSyntax(code)
  return limitedEvalFunction(`(() => (${code}))()`, options.timeout || LONG_TIMEOUT)
}
