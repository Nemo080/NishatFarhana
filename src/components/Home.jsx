import React from "react";
// import Portfolio from './Portfolio.jsx';
// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Contact from "./Contact.jsx";
import MyButton from "./Button.jsx";

const Home = () => {
  return (
    <>
      <h1 className="text-6xl font-bold my-4">Nishat's Portfolio</h1>
      {/* <img className="home-me my-4" src="/me.png" alt="drawing of me" /> */}
      <div className="home">
        <div>
          <img className="home-me my-4" src="/me.png" alt="drawing of me" />
        </div>
        <div>
            <p className=" mx-4 mt-20 mr-20">
              Hi! Welcome to my portfolio site! <br />{" "}<br />I am Nishat. I am a web developer
              and an aspiring Software Engineer. I am actively exploring the
              ever-evolving world of technology, honing my skills and expanding my
              knowledge. My journey in this field began in 2021, fueled by a
              longstanding passion for tinkering and crafting. For me, coding and
              programming are like constructing something tangible from scratch, a
              process that resonates deeply with my love for hands-on creation. I
              find joy in building solutions from the ground up, each line of code
              representing a piece carefully assembled to create something
              meaningful and functional for others to utilize.
            </p>
          
          <MyButton to="portfolio" />
          <h3 className="text-3xl font-bold my-4 mt-20">Skills</h3>
          <div className="inline-flex my-8">
            <img
              className="mx-6"
              src="/whitehtml.png"
              alt="white colored html"
            />
            <img className="mx-6" src="/whitecss.png" alt="white colored CSS" />
            <img className="mx-6" src="/whiteJS.png" alt="white colored JS" />
            <img
              className="mx-6"
              src="/whitereact.png"
              alt="white colored react"
            />
          </div>
          </div>
        </div>
      {/* <Contact></Contact> */}
    </>
  );
};

export default Home;
