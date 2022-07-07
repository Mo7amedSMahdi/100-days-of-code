import React from 'react';
import './App.css';
import heroDesktop from './images/hero-desktop.jpg';
import heroMobile from './images/hero-mobile.jpg';
import logo from './images/logo.svg';

function App() {
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
              <input type='email' placeholder='Enter your email' />
              <button type='submit'>Get Notified</button>
            </form>
          </div>
        </div>
        <div className='main-image'>
          <img src={heroMobile} alt='girl wearing orang shirt' />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
