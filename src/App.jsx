import { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import './App.css'
import Skills from './components/Skills'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navigation />
      <Hero />
       <Skills/>
       <Footer/>
    
    </div>
  )
}

export default App
