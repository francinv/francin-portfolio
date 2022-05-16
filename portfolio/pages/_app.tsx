import '../styles/globals.css'
import type { AppProps } from 'next/app'
import PortfolioProvider from '../features/AppContext'
import { ApolloProvider } from "@apollo/client";
import { client } from '../services/apolloConfig';


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ApolloProvider client={client}>
      <PortfolioProvider>
        <Component {...pageProps} />
      </PortfolioProvider>
    </ApolloProvider>
  );
}

export default MyApp
