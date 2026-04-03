import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HeroSlider from './components/HeroSlider/HeroSlider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <Hero />
    <HeroSlider />
    </div>

  )
}

export default App
