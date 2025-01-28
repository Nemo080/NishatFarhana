import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './index.css';
import Navbar from './components/Navbar';
import About from './components/About.jsx';
import Home from './components/Home.jsx';
import Contact from './components/Contact.jsx';
import Portfolio from './components/Portfolio.jsx';



function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <hr /> */}
          <Routes>
              <Route path ="/" element={<Home/>}/>
              <Route path ="/portfolio" element={<Portfolio />}/>
              <Route path ="/about" element={<About/>}/>
              <Route path ="/contact" element={<Contact props = "phone" />}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
