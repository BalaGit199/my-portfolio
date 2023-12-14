import { useState } from 'react'
import './App.css'
import AboutComponent from './components/AboutComponent'
import ContactComponent from './components/ContactComponent'
import ExperienceComponent from './components/ExperienceComponent'
import HomeComponent from './components/HomeComponent'
import NavBarComponents from './components/NavBarComponents'
import PortfolioComponent from './components/PortfolioComponent'
import SocialLinksComponent from './components/SocialLinksComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBarComponents/>
      <HomeComponent/>
      <SocialLinksComponent/>
      <AboutComponent/>
      <PortfolioComponent/>
      <ExperienceComponent/>
      <ContactComponent/>
    </div> 
  )
}

export default App
