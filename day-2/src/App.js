import React, { useState } from 'react';
import './App.css';
import star from './images/icon-star.svg';

function App() {
  const list = [
    {
      index: 1,
      selected: false,
    },
    {
      index: 2,
      selected: false,
    },
    {
      index: 3,
      selected: false,
    },
    {
      index: 4,
      selected: false,
    },
    {
      index: 5,
      selected: false,
    },
  ];
  const [rate, setRate] = useState(0);
  const [rateList, setRateList] = useState(list);

  const handleClick = (index) => {
    const newRateList = rateList.map((item) => {
      if (item.index === index) {
        item.selected = !item.selected;
      } else {
        item.selected = false;
      }
      return item;
    });
    setRateList(newRateList);
    setRate(index);
  };
  return (
    <div className='card-container'>
      <div className='rating-card'>
        <div className='card-header'>
          <img className='img-star' src={star} alt='orang star icon' />
        </div>
        <div className='card-title'>
          <h2>How did we do?</h2>
        </div>
        <div className='card-content'>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        </div>
        <div className='card-rating'>
          <ul className='rating-bar'>
            {rateList.map((item, index) => {
              return (
                <li
                  className={item.selected ? 'active' : ''}
                  onClick={() => {
                    handleClick(item.index);
                  }}
                  key={index}>
                  <span>{item.index}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className='card-action'>
          <button type='button' className='btn btn--primary'>
            submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
