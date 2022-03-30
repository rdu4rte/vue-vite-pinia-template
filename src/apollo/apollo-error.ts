import { onError } from 'apollo-link-error'

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path, extensions }) => {
      if (message === 'not.authorized' || message === 'invalid.session') {
        localStorage.removeItem('session')
        window.location.replace('/#/login')
      }
      console.log(
        `[GraphQL Error] Message: ${message}, Location: ${JSON.stringify(locations)}, Path: ${path}, Code: ${extensions.exception.code
        }`
      )
    })
  if (networkError && networkError.statusCode === 401) window.location.replace('/#/login')
  if (networkError) console.log(`[Network Error] ${networkError.message}`)
})