'use server';

import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { GITHUB_GRAPHQL_API } from '@/constants';
import { setContext } from '@apollo/client/link/context';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

const apiLink = new HttpLink({ uri: GITHUB_GRAPHQL_API });

const authLink = setContext((_, { headers }) => {
  const token = process.env.GITHUB_ACCESS_TOKEN;
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/graphql',
    },
  };
});

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(apiLink),
  });
});
