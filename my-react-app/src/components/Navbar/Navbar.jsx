import React from 'react';
import './Navbar.css';

import videobg from "../../assets/portvido.mp4";
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Navbar = () => {
  const [text] = useTypewriter({
    words: ['a Developer', 'an Artist', '& a Designer'],
    loop: true,
    delay: 100,
    deleteSpeed: 50,
  });

  return (
    <>
      <div className='background'>
        <video src={videobg} autoPlay loop muted playsInline />
        <div className="overlay-text">
          <p style={{ color: "#1ce480", fontFamily: "Georgia" }}>Hi! &nbsp;I am</p>
          <h1>Aswanth.v</h1>
           <p className="typewriter-effect">
      I'm &nbsp;<span className="animated-text">{text}</span>
      <Cursor cursorColor="#1ce480" />
    </p>
          <div className='but-div'>
          <button className='button'>About Me</button>
          </div>
        </div>
        
        <div>
            <h2 className='chat'>Let's Chat</h2>
          </div>
       
        <div className='social-icon'>
          
        <a href="https://github.com/aswanth" target="_blank" rel="noopener noreferrer" className='icon1'>
                <FontAwesomeIcon icon={faGithub} /> 
            </a>
            
            <a href="https://linkedin.com/in/aswanth" target="_blank" rel="noopener noreferrer" className='icon2'>
                <FontAwesomeIcon icon={faLinkedin} /> 
            </a>

            <a href= "" target="_blank" rel="noopener noreferrer" className='icon3'>
            <FontAwesomeIcon icon={faInstagram}/>
            </a>

            <a href= "" target="_blank" rel="noopener noreferrer" className='icon4'>
            <FontAwesomeIcon icon={faWhatsapp}/>
            </a>
          </div>
        </div>
      
    </>
   
    
  );
};

export default Navbar;

