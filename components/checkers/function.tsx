import * as B from 'react-bootstrap'
import * as React from 'react'
import { Args, checkJsSyntax, enumerateArgs } from '@lib/checker-util'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { autocompletion } from '@codemirror/autocomplete'
import styles from './function.module.scss'
import { useStorage } from '@lib/use-storage'
import { NoSSR } from '@components/noSsr'
import { evalFunction, EvalError } from '@lib/eval'
import { useDebouncedCallback } from 'use-debounce'

export function FunctionChecker(props: {
  taskId: string
  // Expression providing the correct result
  expected: (args: number[]) => number
  // Arguments to check
  args: Args
  // Initial code string
  code?: string
}) {
  let [code, setCode] = useStorage<string>('FunctionChecker', props.taskId)(props.code || '')

  let [result, setResult_] = React.useState<{
    status: 'empty' | 'waiting' | 'success' | 'error'
    message?: string
  }>({ status: 'empty' })
  let setResult = useDebouncedCallback(setResult_, 250)

  React.useEffect(() => {
    // Check that the code is not empty
    if (code.trim() === '') {
      setResult({ status: 'empty' })
      return
    }
    setResult({ status: 'waiting' })
    evalFunction(code, { timeout: 1000 })
      .then(async (fnWorker) => {
        // Check the code on all inputs
        const invocation = (args: any[]) => `${fnWorker.fnName}(${args.join(', ')})`
        let done = false
        for (let value of enumerateArgs(props.args)) {
          await fnWorker
            .call(value)
            .then((actual) => {
              const expected = props.expected(value)
              if (actual !== expected) {
                setResult({
                  status: 'error',
                  message:
                    invocation(value) + `: код выдал ${actual}, должно было быть ${expected}`,
                })
                done = true
              }
            })
            .catch((e: EvalError) => {
              switch (e.type) {
                case 'Timeout':
                  setResult({ status: 'error', message: `Код выполняется слишком долго` })
                  done = true
                  break
                case 'RuntimeError':
                  setResult({
                    status: 'error',
                    message: invocation(value) + `: ошибка: ${e.message}`,
                  })
                  done = true
                  break
                default:
                  setResult({ status: 'error', message: `Ошибка: ${JSON.stringify(e)}` })
                  done = true
              }
            })
          if (done) return
        }
        setResult({ status: 'success' })
      })
      .catch((e: EvalError) => {
        switch (e.type) {
          case 'Timeout':
            setResult({ status: 'error', message: `Код выполняется слишком долго` })
            break
          case 'SyntaxError':
            setResult({
              status: 'error',
              message:
                e.message === 'Unexpected end of script' || e.message === 'Unexpected end of input'
                  ? `Код не дописан`
                  : `Ошибка синтаксиса: ${e.message}`,
            })
            break
          case 'RuntimeError':
            setResult({ status: 'error', message: `Ошибка: ${e.message}` })
            break
          case 'NotAFunction':
            setResult({ status: 'error', message: `Ожидалась функция` })
            break
        }
      })
  }, [code, props, setResult])

  return (
    // Using NoSSR because useStorage is not SSR-safe
    <NoSSR>
      <B.Form>
        <B.Form.Group>
          <CodeMirror
            className={styles.CodeMirror}
            value={code}
            onChange={(value) => setCode(value)}
            theme="light"
            extensions={[javascript(), autocompletion({ activateOnTyping: false })]}
          />

          {(() => {
            switch (result.status) {
              case 'empty':
                return null
              case 'waiting':
                return <B.Form.Text className="text-muted">Проверяем...</B.Form.Text>
              case 'success':
                return <B.Form.Text className="text-success">Правильно!</B.Form.Text>
              case 'error':
                return <B.Form.Text className="text-danger">{result.message}</B.Form.Text>
            }
          })()}
        </B.Form.Group>
      </B.Form>
    </NoSSR>
  )
}
