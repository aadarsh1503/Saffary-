import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom' // Import BrowserRouter
import './App.css'
import Aboutus from './components/Aboutus/Aboutus'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router> {/* Wrap the app with BrowserRouter */}
      <div>
        <Navbar />
        <Aboutus />
    
      </div>
    </Router>
  )
}

export default App
