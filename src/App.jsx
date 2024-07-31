import { useState } from "react"

export function App () {
  const [fact, setFact] = useState('lorem ipsum cat fact whatever')
  return (
        <main>
        <h1>Hello word</h1>
        <p>{fact}</p>
        </main>
    )
}