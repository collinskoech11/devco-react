import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection(){
    return(
        <div className='hero-container'>
        <video src='/videos/video-1.mp4' autoPlay loop muted />
        <h1>DevcoKenya</h1>
        <p>Are you a developer?</p>
        <div className='hero-btns'>
          <Button style='width:100px;'
            className='btn--large btn--primary'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
          >
           Join us
          </Button>
          <Button
            className='btn--large btn--primary'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            onClick={console.log('hey')}
            >
          Learn More
          </Button>
        </div>
      </div>
    );
}

export default HeroSection;