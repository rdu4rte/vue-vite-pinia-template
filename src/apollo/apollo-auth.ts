import { ApolloLink } from 'apollo-link'

export const authMiddleware = new ApolloLink((operation, forward) => {
  const sessionId = localStorage.getItem('session') || null
  operation.setContext({
    headers: {
      authorization: `Bearer ${sessionId}`
    }
  })

  return forward(operation)
})