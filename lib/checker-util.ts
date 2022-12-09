export type Generator = { from: number; to: number; step?: number }

export type Vars = Record<string, Generator>
export type Args = Generator[]

function generate(x: Generator): number[] {
  const { from, to, step = 1 } = x
  const result = []
  for (let i = from; i <= to; i += step) {
    result.push(i)
  }
  return result
}

export function enumerateVars(vars: Vars): Record<string, number>[] {
  if (Object.keys(vars).length === 0) {
    return [{}]
  } else {
    const [name, gen] = Object.entries(vars)[0]
    const rest = enumerateVars(Object.fromEntries(Object.entries(vars).slice(1)))
    let result: Record<string, number>[] = []
    for (const x of generate(gen)) {
      result = [...result, ...rest.map((r) => ({ ...r, [name]: x }))]
    }
    return result
  }
}

export function enumerateArgs(args: Args): number[][] {
  if (args.length === 0) {
    return [[]]
  } else {
    const [gen, ...rest] = args
    const restResult = enumerateArgs(rest)
    let result: number[][] = []
    for (const x of generate(gen)) {
      result = [...result, ...restResult.map((r) => [x, ...r])]
    }
    return result
  }
}

export function stringifyVars(values: Record<string, any>) {
  return Object.entries(values)
    .map(([k, v]) => `${k}=${v}`)
    .join(', ')
}

// TODO remove in favor of eval.ts
export function checkJsSyntax(code: string): string | null {
  try {
    eval(code)
  } catch (e) {
    if (e instanceof SyntaxError) {
      return e.message
    }
  }
  return null
}
