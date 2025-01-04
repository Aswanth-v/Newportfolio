import React from 'react';
import './Hero.css';

function Hero({who}) {
  return (
    <div className='hero-overlay'>
      <div>
      <p className='para'>0.1</p>
      <h1 className='intro-head'>Who I Am</h1>
      <p className='who-iam-para'>

        {who}
      </p>
      </div>
    </div>
  );
}

export default Hero;
