import dynamic from 'next/dynamic'
import { P5WrapperProps } from 'react-p5-wrapper'

export const P5 = dynamic(
  async () => import('react-p5-wrapper').then((mod) => mod.ReactP5Wrapper as any),
  {
    ssr: false,
  }
) as unknown as React.NamedExoticComponent<P5WrapperProps>
