import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout({ cart }) {
  const totalPrice = cart
    ? cart.reduce((total, item) => total + Number(item.price), 0).toFixed(2)
    : 0;

  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <div className="checkout-content">
  
        {/* Payment Information */}
        <div className="checkout-section">
          <h3 className="checkout-section-title">Payment Information</h3>
          {/* Payment Information */}
<div className="checkout-section">
  <h3 className="checkout-section-title">Payment Information</h3>
  <form>
    <div className="form-group">
      <label htmlFor="cardNumber">Card Number</label>
      <input type="text" id="cardNumber" name="cardNumber" required />
    </div>
    <div className="form-group">
      <label htmlFor="cardName">Cardholder Name</label>
      <input type="text" id="cardName" name="cardName" required />
    </div>
    <div className="form-group">
      <label htmlFor="expiryDate">Expiry Date</label>
      <input type="text" id="expiryDate" name="expiryDate" required />
    </div>
    <div className="form-group">
      <label htmlFor="cvv">CVV</label>
      <input type="text" id="cvv" name="cvv" required />
    </div>
  </form>
</div>

        </div>
  
        {/* Order Summary */}
        <div className="checkout-section">
          <h3 className="checkout-section-title">Order Summary</h3>
          {/* ... Order Summary table */}
          <p className="checkout-total">Total Price: ${totalPrice}</p>
        </div>
      </div>
  
      {/* Place Order button */}
      <div className="checkout-actions">
        <button className="checkout-cancel" onClick={() => navigate('/marketplace')}>
          Cancel
        </button>
        <button className="checkout-place-order" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default Checkout;
