import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();

  const { cart } = location.state || { cart: [] };

  const totalPrice = cart
  ? cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)
  : 0;


  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    navigate('/');
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>
      <div className="checkout-content">
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

        <div className="checkout-section">
  <h3 className="checkout-section-title">Order Summary</h3>
  <table className="order-summary-table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
      </tr>
    </thead>
    <tbody>
      {cart.map((item) => (
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.quantity}</td>
          <td>${item.price}</td>
          <td>${(item.quantity * item.price).toFixed(2)}</td>
        </tr>
      ))}
    </tbody>
  </table>
  <p className="checkout-total">Total Price: ${totalPrice}</p>
</div>

      </div>

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
