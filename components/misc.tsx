import { BiFile, BiWorld } from 'react-icons/bi'

export function FileName(props: { children: React.ReactNode }) {
  return (
    <>
      <span>
        <BiFile size={20} style={{ marginBottom: '5px' }} />
        <b>{props.children}</b>
      </span>
      <style jsx>{`
        span {
          white-space: nowrap;
        }
      `}</style>
    </>
  )
}

export function Web(props: { children: React.ReactNode }) {
  return (
    <>
      <span>
        <BiWorld size={20} style={{ marginBottom: '3px', marginRight: '2px' }} />
        <b>{props.children}</b>
      </span>
      <style jsx>{`
        span {
          white-space: nowrap;
        }
      `}</style>
    </>
  )
}

export function NoPageBreak(props: { children: React.ReactNode }) {
  return (
    <>
      <div className="no-page-break">{props.children}</div>
      <style jsx>{`
        .no-page-break {
          page-break-inside: avoid;
        }
      `}</style>
    </>
  )
}
