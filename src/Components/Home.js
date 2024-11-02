import React from 'react';
import './Home.css';
import Lottie from 'lottie-react';
import Timer from './Timer';
import clockAnimation from '../clock1.json';
import SpaceButton from './SpaceButton';

export const Home = () => {
  const launchDate = "2024-11-08T00:00:00Z"; 

  return (
    <div className="home-container">
      <section className="main">
        <div className="heading">
          <h1>A.I.M.L</h1>
          <h1>WORKSHOP</h1>
          <p>
            AIML enables the creation of intelligent chatbots that 
            facilitate natural conversations and structured responses.
          </p>
        </div>
      </section>
      
      {/* SpaceButton */}

      <section className="button-section">
        <SpaceButton />
      </section>
      
      {/* Countdown Timer */}
      <section className='count'>
              {/* Lottie animation */}
              <Lottie
          animationData={clockAnimation}
          loop={true}
          className="responsive-lottie-clock"
        />
        <div className='countdown'>
          <h1>WORKSHOP STARTS IN . .</h1>
          <Timer launchDate={launchDate} />
        </div>
      </section>
    </div>
  );
};
