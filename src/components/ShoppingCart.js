import React from 'react';
import './ShoppingCart.css';

function ShoppingCart({ cart, onRemoveClick }) {
  const totalPrice = cart
    ? cart.reduce((total, item) => total + Number(item.price), 0).toFixed(2)
    : 0;

  return (
    <div className="cart-window">
      <h3>Shopping Cart</h3>
      {cart && cart.length > 0 ? (
        <>
          <ul className="cart-items">
            {cart.map((item) => (
              <li key={item.name} className="cart-item">
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${item.price}</span>
                <button onClick={() => onRemoveClick(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <p className="cart-total">Total Price: ${totalPrice}</p>
          <button className="cart-checkout-button">Checkout</button>
        </>
      ) : (
        <p className="cart-empty">Your cart is empty.</p>
      )}
    </div>
  );
}

export default ShoppingCart;
