/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

export function Figure(props: {
  image?: string
  children?: React.ReactNode
  caption?: string
  right?: boolean
}) {
  const children = props.children ? props.children : null
  return (
    <>
      <figure>
        {props.caption ? <figcaption>{props.caption}</figcaption> : null}
        {props.image ? <img src={props.image} /> : null}
        {children}
      </figure>
      <style jsx>{`
        figure {
          ${props.right ? 'float: right; margin-left: 2rem; max-width: 50%;' : ''}
        }
      `}</style>
    </>
  )
}
