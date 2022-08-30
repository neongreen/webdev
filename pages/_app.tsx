import '../styles/globals.css'
import '@code-hike/mdx/dist/index.css'
import Layout from '@components/layout'
import * as B from 'react-bootstrap'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-8GX3VF7ZJG"
      />
      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8GX3VF7ZJG');
        `}
      </Script>

      <B.SSRProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </B.SSRProvider>
    </>
  )
}

export default MyApp
