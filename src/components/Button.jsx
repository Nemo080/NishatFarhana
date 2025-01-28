import React from 'react'
import { Link } from 'react-router-dom';

// https://www.geeksforgeeks.org/how-to-link-a-custom-react-component-mybutton-to-another-page/

const MyButton = ({ to }) => { 
  
    return ( 
        <a href={`/${to}`}> 
            <Link to="/portfolio">
                <button className="my-button btn text-black text-xl mt-12"> 
                    Check out my Projects {to === '' ? "home" : to === 'portfolio' } 
                </button> 
            </Link>
        </a> 
    ) 
} 
  
export default MyButton;
