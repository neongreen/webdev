import * as B from 'react-bootstrap'
import * as React from 'react'
import { BsFillCheckSquareFill, BsFillQuestionSquareFill, BsFillXSquareFill } from 'react-icons/bs'
import plural from 'plural-ru'

import { HighlightMatches } from '@components/highlight-matches'
import styles from './regex-checker.module.scss'

function check(args: { regex: RegExp; toMatch: string[]; toFail: string[] }): {
  toMatch: { text: string; success: boolean }[]
  toFail: { text: string; success: boolean }[]
  overall: boolean
} {
  const { regex, toMatch, toFail } = args
  return {
    toMatch: toMatch.map((text) => ({
      text,
      success: regex.test(text),
    })),
    toFail: toFail.map((text) => ({
      text,
      success: !regex.test(text),
    })),
    overall: toMatch.every((text) => regex.test(text)) && toFail.every((text) => !regex.test(text)),
  }
}

function StatusIcon(props: { status: 'success' | 'failure' | 'unknown' }) {
  switch (props.status) {
    case 'success':
      return <BsFillCheckSquareFill className="text-success" style={{ padding: '1px' }} />
    case 'failure':
      return <BsFillXSquareFill className="text-danger" style={{ padding: '1px' }} />
    case 'unknown':
      return <BsFillQuestionSquareFill style={{ color: '#ccc', padding: '1px' }} />
  }
}

function ToMatchTable(props: {
  regex: RegExp | null
  toMatch: { text: string; success: boolean | null }[]
}) {
  return (
    <table className={styles.resultTable}>
      <thead>
        <tr>
          <th colSpan={2}>
            <span className="small">✅ Должны подходить</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.toMatch.map((x, i) => (
          <tr key={i}>
            <td>
              <StatusIcon
                status={x.success === null ? 'unknown' : x.success ? 'success' : 'failure'}
              />
            </td>
            <td className="mono">
              {props.regex ? (
                <HighlightMatches
                  match={props.regex}
                  text={x.text}
                  highlightClassname={styles.highlightGood}
                  mode="first"
                />
              ) : (
                x.text
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

function ToFailTable(props: {
  regex: RegExp | null
  toFail: { text: string; success: boolean | null }[]
}) {
  return (
    <table className={`${styles.resultTable} ${styles.resultTableFail}`}>
      <thead>
        <tr>
          <th colSpan={2}>
            <span className="small">🚫 Не должны подходить</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.toFail.map((x, i) => (
          <tr key={i}>
            <td>
              <StatusIcon
                status={x.success === null ? 'unknown' : x.success ? 'success' : 'failure'}
              />
            </td>
            <td className="mono">
              {props.regex ? (
                <HighlightMatches
                  match={props.regex}
                  text={x.text}
                  highlightClassname={styles.highlightBad}
                  mode="first"
                />
              ) : (
                x.text
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function RegexChecker(props: {
  label: React.ReactNode[]
  toMatch: string[]
  toFail: string[]
  regexLengthLimit?: number
}) {
  let [code, setCode] = React.useState('')

  const regexError = React.useMemo(() => {
    try {
      new RegExp(code)
      return null
    } catch (e) {
      return (e as any).message
    }
  }, [code])

  const limitExceeded = !!props.regexLengthLimit && code.length > props.regexLengthLimit

  const regex = code && !regexError ? new RegExp(code) : null

  const results = regex
    ? check({ regex, toMatch: props.toMatch, toFail: props.toFail })
    : {
        toMatch: props.toMatch.map((text) => ({ text, success: null })),
        toFail: props.toFail.map((text) => ({ text, success: null })),
        overall: null,
      }
  return (
    <>
      <B.Form>
        <div>{props.label}</div>
        <div className="d-flex flex-row align-items-top">
          <B.Form.Group>
            <B.Form.Control
              className="mono mt-2"
              style={{ width: '25rem' }}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              isInvalid={regexError || results.overall === false}
            />
            <B.Form.Control.Feedback type="invalid" className="mt-1">
              {regexError}
            </B.Form.Control.Feedback>
            {!regexError && (
              <div className="d-flex justify-content-between mt-1">
                <div>
                  {results.overall === true &&
                    (limitExceeded ? (
                      <B.Form.Text style={{ color: '#d9a50a' }}>
                        Работает, но надо уложиться в{' '}
                        {plural(props.regexLengthLimit!, '%d символ', '%d символа', '%d символов')}
                      </B.Form.Text>
                    ) : (
                      <B.Form.Text className="text-success">Правильно!</B.Form.Text>
                    ))}
                </div>
                <B.Form.Text className="text-muted">{code.length}</B.Form.Text>
              </div>
            )}
          </B.Form.Group>
          <div className="ms-5">
            <ToMatchTable regex={regex} toMatch={results.toMatch} />
          </div>
          <div className="ms-5">
            <ToFailTable regex={regex} toFail={results.toFail} />
          </div>
        </div>
      </B.Form>
    </>
  )
}
