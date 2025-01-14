import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'

import '@spotify-social/components/styles.css'
import './index.css'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

async function enableMocking() {
  if (!import.meta.env.DEV) {
    return
  }

  const { worker } = await import('@spotify-social/mock')
  return worker.start()
}

enableMocking().then(() => {
  // Render the app
  const rootElement = document.getElementById('root')!
  if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement)
    root.render(
      <StrictMode>
        <RouterProvider router={router} />
      </StrictMode>,
    )
  }
}).catch((error) => {
  if (error instanceof Error) {
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <div>
        <h1>Failed to setup mock</h1>
        <pre>{error.message}</pre>
        <pre>You likely need to input <code>`{`npx msw init <PUBLIC_DIR> --save`}` in terminal</code></pre>
        <pre>https://mswjs.io/docs/integrations/browser</pre>
      </div>,
    )
  } else {
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <div>
        <h1>Failed to setup mock</h1>
        <pre>{JSON.stringify(error, null, 2)}</pre>
      </div>,
    )
  }
})