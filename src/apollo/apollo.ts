import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { from } from 'apollo-link'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createApolloProvider } from '@vue/apollo-option'
import { authMiddleware } from './apollo-auth'
import { errorLink } from './apollo-error'

const httpLink = new HttpLink({
  uri: process.env.VUE_APP_GRAPHQL_ENDPOINT || 'localhost:4000/graphql'
})

export const apolloProvider = createApolloProvider({
  defaultClient: new ApolloClient({
    link: from([authMiddleware, errorLink, httpLink]),
    cache: new InMemoryCache(),
    connectToDevTools: true
  })
})