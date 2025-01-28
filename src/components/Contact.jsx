import React from 'react'

const Contact = (props) => {
  // const phone = props = "---,---,----";
  const email = props = "nishatfarhana.business@gmail.com"

  return (
      <div className='inline-block'>
          <h1 className="text-6xl font-bold my-2.5 mb-10">Contact Me</h1>
          <p className="text-xl my-2">Get in touch with me for any queries or feedback.</p>
          <p className="text-xl my-2">Connect with me in any of the following: </p>
              <p className="text-red-300 font-semibold text-xl">{email}</p>            
          {/* <p className="text-xl my-2">Here is my business phone number: {phone}</p> */}
          {/* <p className="text-xl my-2">Connect with me on LinkedIn and check out my Github!</p> */}
          <div className='inline-flex'>
            <a href="https://www.linkedin.com/in/nishat-farhana/" target="_blank" rel="noopener noreferrer">
              <img className="contact-logos" src="/pink-linkedin.jpeg" alt= "linkedin logo"/>
            </a>
            <a href="https://github.com/Nemo080" target="_blank" rel="noopener noreferrer">
              <img className='contact-logos' src="/github.png" alt= "github logo"/>
            </a>
          </div>
          <br></br>
          <a href='/[Nishat Farhana] Resume.pdf' target="_blank" rel="noopener noreferrer"><button className='btn  btn-primary text-xl'>Download Resume</button></a>
          <img className="my-8" src="/sunsetwinter.gif" alt = "sunset winter"/>
          <p className='text-right'>credit to grigoreen</p>
          
      </div>
  );
};

export default Contact;