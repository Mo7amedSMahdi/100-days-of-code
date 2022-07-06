import React, { useState, useEffect, useLayoutEffect } from 'react';
import './App.css';
import CardImageDesktop from './images/image-product-desktop.jpg';
import CardImageMobile from './images/image-product-mobile.jpg';

function App() {
  const [CardImage, SetCardImage] = useState(CardImageMobile);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 768) {
      SetCardImage(CardImageDesktop);
    } else {
      SetCardImage(CardImageMobile);
    }
  }, [size.width]);

  return (
    <div className='card-container'>
      <div className='product-card'>
        <div className='card-image'>
          <img src={CardImage} alt='chanel perfume' />
        </div>
        <div className='card-content'>
          <div className='product-details'>
            <div className='category-title'>
              <p>Perfume</p>
            </div>
            <div className='prodect-title'>
              <h2>Gabrielle Essence Eau De Perfume</h2>
            </div>
            <div className='product-desc'>
              <p>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer- Creator for the House of CHANEL</p>
            </div>
          </div>
          <div className='card-actions'>
            <div className='product-price'>
              <div className='price-value'>
                <span>$149.99</span>
              </div>
              <div className='old-price'>
                <span>$169.99</span>
              </div>
            </div>
            <div className='action-button'>
              <button type='button' className='btn btn--primary'>
                <i className='ri-shopping-cart-2-line' />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
