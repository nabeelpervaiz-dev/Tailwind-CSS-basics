import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Card from './Components/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="parent">
      <Navigation />
      <Hero />
      {/* <Card/> */}
    </div>
  )
}

export default App
