import * as B from 'react-bootstrap'
import * as React from 'react'

type Vars = Record<string, { from: number; to: number; step?: number }>

function enumerate(vars: Vars): Record<string, number>[] {
  if (Object.keys(vars).length === 0) {
    return [{}]
  } else {
    const [name, { from, to, step = 1 }] = Object.entries(vars)[0]
    const rest = enumerate(Object.fromEntries(Object.entries(vars).slice(1)))
    let result: Record<string, number>[] = []
    for (let i = from; i <= to; i += step) {
      result = [...result, ...rest.map((r) => ({ ...r, [name]: i }))]
    }
    return result
  }
}

function checkSyntax(code: string): string | null {
  try {
    eval(code)
  } catch (e) {
    if (e instanceof SyntaxError) {
      return e.message
    }
  }
  return null
}

function stringifyVars(values: Record<string, any>) {
  return Object.entries(values)
    .map(([k, v]) => `${k}=${v}`)
    .join(', ')
}

export function Checker(props: {
  label: React.ReactNode[]
  // Expression providing the correct result
  expected: (values: Record<string, number>) => number
  // Values to check
  vars: Vars
  // Initial code string
  code?: string
}) {
  let [code, setCode] = React.useState(props.code || '')
  const validate = React.useMemo(() => {
    const syntaxError = checkSyntax(code)
    if (syntaxError) {
      return `Ошибка ситаксиса: ${syntaxError}`
    }
    const fun = new Function('context', `with (context) {return ${code}}`)
    for (let value of enumerate(props.vars)) {
      try {
        const expectedResult = props.expected(value)
        const actualResult = fun(value)
        if (actualResult !== expectedResult) {
          return `
            ${stringifyVars(value)}: код выдал ${actualResult}, должно было быть ${expectedResult}
          `
        }
      } catch (e) {
        return `${stringifyVars(value)}: ошибка: ${e}`
      }
    }
    return null
  }, [code, props])
  return (
    <>
      <B.Form>
        <B.Form.Group>
          <B.Form.Label>{props.label}</B.Form.Label>
          <B.Form.Control
            style={{ fontFamily: 'monospace', fontSize: '1.2em' }}
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            isInvalid={!!validate && code.trim() !== ''}
          />
          <B.Form.Control.Feedback type="invalid">{validate}</B.Form.Control.Feedback>
          {validate === null && code.trim() !== '' && (
            <>
              <B.Form.Text className="text-success">Правильно!</B.Form.Text>
            </>
          )}
        </B.Form.Group>
      </B.Form>
    </>
  )
}
