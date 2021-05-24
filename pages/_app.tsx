import Head from 'next/head'
import '../styles/global.css'

import { KeyCaster } from '../ui/key-caster'
import { BrowserFrame } from '../ui/browser-frame'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Headless UI - Laravel Meetup</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BrowserFrame>
        <Component {...pageProps} />
      </BrowserFrame>

      <KeyCaster />
    </>
  )
}

export default MyApp
