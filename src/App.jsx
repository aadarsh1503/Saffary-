import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom' // Import BrowserRouter
import './App.css'
import Aboutus from './components/Aboutus/Aboutus'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Saffaryadvantage from './components/Saffaryadvantage/Saffaryadvantage'
import RealTimeStats from './components/RealTimeStats/RealTimeStats'
import HowItWorks from './components/HowItWorks/HowItWorks'
import OurStory from './components/OurStory/OurStory'
import AppPromotion from './components/AppPromotion/AppPromotion'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router> {/* Wrap the app with BrowserRouter */}
      <div>
        <Navbar />
        <Hero />
        <Aboutus />
        <RealTimeStats />
        <Saffaryadvantage />
<HowItWorks />
<OurStory />
<AppPromotion />
    <Footer />
      </div>
    </Router>
  )
}

export default App
