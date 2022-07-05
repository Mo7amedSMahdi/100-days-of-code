import './App.css';
import CardImageDesktop from './images/image-product-desktop.jpg';
import CardImageMobile from './images/image-product-mobile.jpg';

function App() {
  return (
    <div className='card-container'>
      <div className='product-card'>
        <div className='card-image'>
          <img src={CardImageMobile} alt='chanel perfume' />
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
              <button type='button' className='btn btn-primary'>
                <i className='ri-cart-line' />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
