import React, { useState, useEffect } from 'react';
import { useAuth, getBuddiesFromFirestore } from '../firebase/firebase';
import { Navigate } from 'react-router-dom';
import BuddyCard from './BuddyCard';
import ShoppingCart from './ShoppingCart';
import Filter from './Filter';
import './Marketplace.css';

const Marketplace = () => {
  const { user } = useAuth(); // Access the user state from useAuth
  const [filterGame, setFilterGame] = useState('');
  const [cart, setCart] = useState([]);
  const [buddies, setBuddies] = useState([]);

  useEffect(() => {
    fetchBuddies(); // Fetch buddies from Firestore when the component mounts
  }, []);

  const fetchBuddies = async () => {
    const fetchedBuddies = await getBuddiesFromFirestore();
    setBuddies(fetchedBuddies);
  };

  const handleFilterGameChange = (event) => {
    setFilterGame(event.target.value);
  };

  const handleHireClick = (buddy) => {
    setCart([...cart, buddy]);
  };

  const handleRemoveClick = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const handleRemoveAllClick = () => {
    setCart([]);
  };

  const filteredBuddies = buddies.filter(
    (buddy) => !filterGame || buddy.game === filterGame
  );

  return (
    <div className="marketplace-container">
      <div className="marketplace-title-container">
        <h1 className="marketplace-title">Marketplace</h1>
        <p className="marketplace-description">
          Welcome to the marketplace! Here, you can find a variety of buddies available for hire. Browse through the list and select your desired buddy by clicking on the "Hire Me" button. The selected buddies will be added to your shopping cart on the right. To remove a buddy from the cart, simply click the "Remove" button. Once you are ready, click the "Checkout" button to proceed with your hire. Enjoy your shopping experience!
        </p>
      </div>
      <div className="marketplace-content">
        <div className="filter-column">
          <Filter filterGame={filterGame} onChange={handleFilterGameChange} />
        </div>
        <div className="buddies-column">
          {filteredBuddies.map((buddy) => (
            <BuddyCard
              key={buddy.name}
              name={buddy.name}
              game={buddy.game}
              price={buddy.price}
              onHireClick={() => handleHireClick(buddy)}
            />
          ))}
        </div>
        <div className="cart-column">
          <ShoppingCart
            cart={cart}
            onRemoveClick={handleRemoveClick}
            onRemoveAllClick={handleRemoveAllClick}
          />
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
