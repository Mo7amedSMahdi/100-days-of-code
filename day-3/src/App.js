import React, { useState, useEffect } from 'react';
import './App.css';
import heroDesktop from './images/hero-desktop.jpg';
import heroMobile from './images/hero-mobile.jpg';
import arrow from './images/icon-arrow.svg';
import logo from './images/logo.svg';

function App() {
  const [heroImage, setHeroImage] = useState('heroMobile');
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 768) {
      setHeroImage(heroDesktop);
    } else {
      setHeroImage(heroMobile);
    }
  }, [size.width]);

  return (
    <React.Fragment>
      <div className='app-logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='container'>
        <div className='main-content'>
          <div className='content-body'>
            <h2>WE'RE</h2>
            <h1>COMING SOON</h1>
            <p>
              Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and
              our launch deals.
            </p>
          </div>
          <div className='get-notify'>
            <form className='email-form' onSubmit={(e) => e.preventDefault()}>
              <input type='email' placeholder='Email Address' required />
              <button type='submit'>
                <img src={arrow} />
              </button>
            </form>
          </div>
        </div>
        <div className='main-image'>
          <img src={heroImage} alt='girl wearing orang shirt' />
        </div>
      </div>
    </React.Fragment>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener('resize', handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default App;
