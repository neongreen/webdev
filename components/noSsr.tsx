// https://github.com/kadirahq/react-no-ssr/blob/master/src/index.js

import React from 'react'

const DefaultOnSSR = () => <span></span>

export class NoSSR extends React.Component {
  constructor(...args: any) {
    // @ts-ignore
    super(...args)
    this.state = {
      canRender: false,
    }
  }

  componentDidMount() {
    this.setState({ canRender: true })
  }

  render() {
    // @ts-ignore
    const { children, onSSR = <DefaultOnSSR /> } = this.props
    // @ts-ignore
    const { canRender } = this.state

    return canRender ? children : onSSR
  }
}
