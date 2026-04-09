import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import HeroSlider from './components/HeroSlider/HeroSlider'
import AboutPreview from './components/AboutPreview/AboutPreview'
import ProductsPreview from './components/ProductsPreview/ProductsPreview'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import StatsSection from './components/scrolltrigger/Scrolltrigger'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Navbar />
    <Hero /> 
    <HeroSlider />
    <AboutPreview />
    <ProductsPreview />
    <StatsSection/>
    <Footer />
    <ScrollToTop/>
    </div>

  )
}

export default App
