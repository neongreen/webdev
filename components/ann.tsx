export function Ann(props: {
  text: string
  children: React.ReactNode
  align?: 'left' | 'center' | 'right'
}) {
  const align = props.align || 'center'
  return (
    <>
      <ruby>
        {props.children}
        <rt>{props.text}</rt>
      </ruby>
      <style jsx>{`
        rt {
          color: #999;
          font-size: 60%;
          font-family: 'Nunito';
          font-weight: 300;
          font-style: italic;
          text-align: ${align};
        }
      `}</style>
    </>
  )
}

export function AnnStandalone(props: { text: string; align?: 'left' | 'center' | 'right' }) {
  const align = props.align || 'center'
  return (
    <>
      <div>{props.text}</div>
      <style jsx>{`
        div {
          color: #999;
          font-size: 60%;
          font-family: 'Nunito';
          font-weight: 300;
          font-style: italic;
          text-align: ${align};
        }
      `}</style>
    </>
  )
}
