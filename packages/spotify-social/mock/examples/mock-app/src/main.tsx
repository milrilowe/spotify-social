import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

async function enableMocking() {
  if (!import.meta.env.DEV) {
    return
  }

  const { worker } = await import('@spotify-social/mock')
  return worker.start()
}

enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
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