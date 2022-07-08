export function Boxes(props: {
  children: React.ReactNode
  type?: 'green' | 'plain'
  center?: boolean
}) {
  const type = props.type ? props.type : 'plain'
  return (
    <>
      <div className="boxes">{props.children}</div>
      <style jsx>{`
        .boxes {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: 1fr;
          width: 100%;
          margin: 2rem auto;
          ${props.center ? 'align-items: center;' : ''}
        }
        @media print {
          .boxes {
            page-break-inside: avoid;
          }
        }
        .boxes > :global(*) {
          ${type === 'green'
            ? 'border-radius: 20px; background-color: #33998833; padding: 1rem;'
            : ''}
          margin: 0 1rem;
        }
        .boxes > :global(*:first-child) {
          margin-left: 0;
        }
        .boxes > :global(*:last-child) {
          margin-right: 0;
        }
        .boxes ~ .boxes {
          margin-top: 0;
        }
        :global(.exercise) .boxes {
          margin: 0;
        }
      `}</style>
    </>
  )
}

export function Box(props: { children: React.ReactNode }) {
  return (
    <div className="box" {...props}>
      {props.children}
      <style jsx>{`
        .box > :global(.ch-codeblock) {
          margin-top: 0;
          margin-bottom: 0;
        }
      `}</style>
    </div>
  )
}
