import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './ShoppingCart.css';

function ShoppingCart({ cart, onRemoveClick, onRemoveAllClick }) {
  const totalPrice = cart
    ? cart.reduce((total, item) => total + Number(item.price), 0).toFixed(2)
    : 0;

  const navigate = useNavigate();

  const handleRemoveClick = (item) => {
    onRemoveClick(item);
  };

  const handleRemoveAllClick = () => {
    onRemoveAllClick();
  };

  const handleCheckout = () => {
    // Perform any checkout logic here
    // For example, you can navigate to a checkout page
    navigate('/checkout');
  };

  return (
    <div className="cart-window">
      <h3 className="cart-title">Shopping Cart</h3>
      {cart && cart.length > 0 ? (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.name}>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <td>
                    <button
                      onClick={() => handleRemoveClick(item)}
                      className="remove-button"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="cart-total">Total Price: ${totalPrice}</p>
          <div className="cart-buttons">
            <button className="checkout-btn" onClick={handleCheckout}>
              Checkout
            </button>
            <button onClick={handleRemoveAllClick} className="remove-all-btn logout">
              Remove All
            </button>
          </div>
        </>
      ) : (
        <p className="cart-empty">Your cart is empty.</p>
      )}
    </div>
  );
}

export default ShoppingCart;
