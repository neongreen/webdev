import { BiFile } from 'react-icons/bi'

export function FileName(props: { children: React.ReactNode }) {
  return (
    <>
      <span>
        <BiFile size={20} style={{ marginBottom: '5px' }} />
        <b>{props.children}</b>
      </span>
      <style jsx>{`
        span {
          text-decoration: underline;
          white-space: nowrap;
        }
      `}</style>
    </>
  )
}
