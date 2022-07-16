import '../styles/globals.css'
import '@code-hike/mdx/dist/index.css'
import Layout from '@components/layout'
import * as B from 'react-bootstrap'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <B.SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </B.SSRProvider>
    </>
  )
}

export default MyApp
