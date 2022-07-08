import { useId } from 'react'
import { NoSSR } from '@components/noSsr'

// @ts-ignore
import CurvedArrow from 'react-curved-arrow'

export function Arrow(props: { from: string; to: string; options?: any }) {
  return (
    <NoSSR>
      <CurvedArrow
        fromSelector={`#${props.from}`}
        toSelector={`#${props.to}`}
        width={1}
        dynamicUpdate
        {...props.options}
      />
    </NoSSR>
  )
}

export function ArrowTo(props: { to: string; children: React.ReactNode; options: any }) {
  const id = useId().replaceAll(':', '-')
  return (
    <>
      <span id={id}>{props.children}</span>
      <Arrow from={id} to={props.to} options={props.options} />
    </>
  )
}
