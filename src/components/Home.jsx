import React from 'react';
// import Portfolio from './Portfolio.jsx';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from './Contact.jsx';
import MyButton from './Button.jsx';


const Home = () => { 
  return (
   <>
      <h1 className="text-6xl font-bold my-4">Nishat Farhana</h1>
      <div className='home'>
          <img className="home-me my-4" src="/me.png" alt="drawing of me"/>
          <div>
              <p className='my-1 mx-8'>Welcome to my portfolio site! I am a web developer and an aspiring Software Engineer.</p>
              <MyButton to="portfolio"/>
              <h3 className="text-3xl font-bold my-4 mt-20">Skills</h3>
              <div className="inline-flex my-8">
                <img className='mx-6' src="/whitehtml.png" alt="white colored html"/>
                <img className='mx-6' src="/whitecss.png" alt="white colored CSS"/>
                <img className='mx-6' src="/whiteJS.png" alt="white colored JS"/>
                <img className='mx-6' src="/whitereact.png" alt="white colored react" />
              </div>
          </div>
      </div>
      {/* <Contact></Contact> */}
   </>
  ); 
}; 

export default Home;

