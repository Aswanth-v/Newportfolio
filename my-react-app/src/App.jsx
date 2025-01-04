import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import Hero from './components/Hero/Hero.jsx'
import './index.css';


function App() {
  const who = "Hi, I'm Aswanth, a passionate web developer with experience in building modern web applications using the MERN stack. I love creating responsive and user-friendly websites, and I'm always eager to learn new technologies. Let's build something great together!";
  return (
    <div>
      <Navbar />
     
      <Hero who={who}/>
     
    </div>
    
  );
}

export default App;
