export function Ann(props: { text: string; children: React.ReactNode }) {
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
          text-align: center;
        }
      `}</style>
    </>
  )
}
