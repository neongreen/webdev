import * as B from 'react-bootstrap'
import * as React from 'react'
import { checkJsSyntax, enumerateVars, stringifyVars, Vars } from '@lib/checker-util'
import { NoSSR } from '@components/noSsr'
import { useStorage } from '@lib/use-storage'

export function ExprChecker(props: {
  taskId: string
  label: React.ReactNode[]
  // Expression providing the correct result
  expected: (values: Record<string, number>) => number
  // Values to check
  vars: Vars
  // Initial code string
  code?: string
}) {
  let [code, setCode] = useStorage<string>('ExprChecker', props.taskId)(props.code || '')
  const validate = React.useMemo(() => {
    const syntaxError = checkJsSyntax(code)
    if (syntaxError) {
      return `Ошибка синтаксиса: ${syntaxError}`
    }
    const fun = new Function('context', `with (context) {return ${code}}`)
    for (let value of enumerateVars(props.vars)) {
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
    // Using NoSSR because useStorage is not SSR-safe
    <NoSSR>
      <B.Form>
        <B.Form.Group>
          <B.Form.Label>{props.label}</B.Form.Label>
          <B.Form.Control
            className="mono"
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
    </NoSSR>
  )
}
