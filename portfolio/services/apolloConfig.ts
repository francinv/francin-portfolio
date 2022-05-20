import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({uri: 'https://api.github.com/graphql'});
/**
 * Apollo client configuration
 * @param {string} token
 * @returns {ApolloClient}
*/
const authLink = setContext((_, {headers}) => {
    const token = process.env.GITHUB_ACCESS_TOKEN;
    return {
        headers: {
            ...headers,
            authorization: token ? `bearer ${token}` : "",
            'Content-Type': 'application/graphql',
        }
    }
});

/**
 * Apollo client configuration
*/
export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});
