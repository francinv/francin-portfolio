import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PortfolioProvider from '../features/AppContext'

function MyApp({ Component, pageProps }: AppProps) {
  return <PortfolioProvider><Component {...pageProps} /></PortfolioProvider>
}

export default MyApp
