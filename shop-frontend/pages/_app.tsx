import '../styles/globals.css'
import '../styles/main.css'

// import '../styles/bootstrap.min.css'
// import '../styles/classy-nav.min.css'
// import '../styles/core-style.css'

import '../scss/style.scss'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
