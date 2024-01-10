import Register from './component/Register'
import Home from './component/Home'
import Contact from './component/Contact'
import { Routes, Link, Route } from "react-router-dom";

import './App.css'

function App() {


  return (
    <>
    <>
      <nav className="navbar">
      
        
            <Link className="kalvium dec" to="/"><h1>KALVIUM❤️</h1></Link>
          
          <div className="about">
          
            
              <Link to="/contact" className="dec"><h1>Contact</h1></Link>
          
              <Link to="/about" className="dec"><h1>Register</h1></Link>
            
          </div>
        
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>

    </>
  )
}

export default App
