import { useEffect, useState } from 'react'


function App() {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    fetch('/auth/login')
      .then(res => res.json())
      .then(setData)
      .catch(err => setError(err.message))
  }, [])

  if (error) return <div>Error: {error}</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <div>
        <h1>Auth Test</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </>
  )
}

export default App
