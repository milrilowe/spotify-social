import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import '@spotify-social/components/styles.css'
import './index.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { api } from './utils/trpc'
import { httpBatchLink } from '@trpc/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AuthProvider } from './context/auth'
import App from './App'

// Create a new router instance
export const router = createRouter({
  routeTree, context: {
    auth: undefined!,
  }
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
const queryClient = new QueryClient()

export const trpcClient = api.createClient({
  links: [
    httpBatchLink({
      url: 'http://localhost:3000/api',
      fetch(url, options) {
        return fetch(url, { ...options, credentials: 'include' })
      }
    })
  ]
})

// Render the app
const rootElement = document.getElementById('root')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <api.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <StrictMode>
          <AuthProvider>
            <App />
          </AuthProvider>
        </StrictMode>
        <ReactQueryDevtools position='bottom-right' />
      </QueryClientProvider>
    </api.Provider>,
  )
}