import 'tailwindcss/tailwind.css'

import { KeyCaster } from '../ui/key-caster'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <KeyCaster />
    </>
  )
}

export default MyApp
