import * as B from 'react-bootstrap'
import * as React from 'react'
import { Args, checkJsSyntax, enumerateArgs } from '@lib/checker-util'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { autocompletion } from '@codemirror/autocomplete'
import styles from './function.module.scss'

export function FunctionChecker(props: {
  // Expression providing the correct result
  expected: (args: number[]) => number
  // Arguments to check
  args: Args
  // Initial code string
  code?: string
}) {
  let [code, setCode] = React.useState(props.code || '')
  const validate = React.useMemo(() => {
    const syntaxError = checkJsSyntax(code)
    if (syntaxError) {
      return `Ошибка синтаксиса: ${syntaxError}`
    }
    let fun
    try {
      fun = new Function(`return (${code})`)()
    } catch (e) {
      return `Ошибка: ${e}`
    }
    if (typeof fun !== 'function') {
      return `Код должен быть функцией, а получилось: ${typeof fun}`
    }
    for (let value of enumerateArgs(props.args)) {
      try {
        const expectedResult = props.expected(value)
        const actualResult = fun(...value)
        if (actualResult !== expectedResult) {
          return (
            `${fun.name}(${value.join(', ')}): ` +
            `код выдал ${actualResult}, должно было быть ${expectedResult}`
          )
        }
      } catch (e) {
        return `${fun.name}(${value.join(', ')}): ошибка: ${e}`
      }
    }
    return null
  }, [code, props])
  return (
    <>
      <B.Form>
        <B.Form.Group>
          <CodeMirror
            className={styles.CodeMirror}
            value={code}
            onChange={(value) => setCode(value)}
            theme="light"
            extensions={[javascript(), autocompletion({ activateOnTyping: false })]}
          />

          {validate !== null && code.trim() !== '' && (
            <B.Form.Text className="text-danger">{validate}</B.Form.Text>
          )}
          {validate === null && code.trim() !== '' && (
            <B.Form.Text className="text-success">Правильно!</B.Form.Text>
          )}
        </B.Form.Group>
      </B.Form>
    </>
  )
}
