export function Exercise(props: { children: React.ReactElement | React.ReactElement[] }) {
  // if props.children is not an array, make it an array
  const items = Array.isArray(props.children) ? props.children : [props.children]
  const steps = items.filter((item) => item.type === Step)
  const mistakes = items.filter((item) => item.type === Mistake)
  return (
    <>
      <div className="exercise">
        <p>
          <b>Упражнение:</b>
        </p>
        <ol className="steps">{steps}</ol>
        {mistakes.length > 0 && (
          <>
            <p style={{ marginTop: '3rem' }}>
              <b>Возможные ошибки:</b>
            </p>
            <ol className="mistakes">{mistakes}</ol>
          </>
        )}
      </div>
      <style jsx>{`
        .exercise {
          margin-top: 2rem;
          margin-bottom: 2rem;
          background-color: #eeeeee;
          border-radius: 10px;
          padding: 1rem;
          border: 3px dashed black;
        }
        .exercise > :global(p:last-child),
        .exercise > :global(figure:last-child) {
          margin-bottom: 0px;
        }

        ol {
          list-style: none;
          counter-reset: li;
          padding-inline-start: 4rem;
        }
        ol > :global(li) {
          counter-increment: li;
          list-style-position: inside;
          margin-top: -1.2rem;
        }
        ol > :global(li::before) {
          content: counter(li);
          display: inline-block;
          width: 2rem;
          height: 2rem;
          position: relative;
          top: 1.75rem;
          line-height: 1.8rem;
          text-align: center;
          margin-left: -3rem;
          margin-top: -1rem;
          margin-right: 0.75rem;
        }
        ol.steps :global(li::before) {
          color: blue;
          border: 2px dotted blue;
          border-radius: 50%;
        }
        ol.mistakes :global(li::before) {
          color: red;
          border: 2px dashed red;
          border-radius: 3px;
        }
      `}</style>
    </>
  )
}

export function Step(props: { children: React.ReactNode }) {
  return <li>{props.children}</li>
}

export function Mistake(props: { children: React.ReactNode }) {
  return <li>{props.children}</li>
}
