/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

export function Figure(props: {
  image?: string
  children?: React.ReactNode
  caption?: string
  maxWidth?: string
  noBorder?: boolean
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
          margin-bottom: 1.5rem;
          max-width: ${props.maxWidth || '500px'};
        }
        figure > :global(img) {
          width: 100%;
          ${props.noBorder ? '' : 'border: 1px solid gray;'}
        }
      `}</style>
    </>
  )
}
