import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({uri: process.env.GITHUB_API_URL});

const authLink = setContext((_, {headers}) => {
    const token = process.env.GITHUB_ACCESS_TOKEN;
    return {
        headers: {
            ...headers,
            authorization: token ? `bearer ${token}` : "",
        }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});
