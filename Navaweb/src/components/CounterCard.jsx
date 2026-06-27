import { useState } from 'react'

export default function CounterCard() {
  const [count, setCount] = useState(0)

  return (
    <section className="card">
      <p>Haz clic para incrementar el contador.</p>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        Cuenta: {count}
      </button>
    </section>
  )
}
