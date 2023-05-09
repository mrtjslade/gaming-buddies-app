import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate(); // Access the navigate function

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log('Register button clicked');

    try {
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      // Additional logic after successful registration (e.g., update user profile)

      console.log('Registration successful:', user);

      // Redirect to the marketplace page after successful registration
      navigate('/marketplace');
    } catch (error) {
      console.log('Registration error:', error);
      // Handle registration error (e.g., show error message to the user)
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          {/* Commented out first name and last name fields */}
          {/* <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div> */}

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          {/* Commented out birthday field */}
          {/* <div className="form-group">
            <label htmlFor="birthday">Birthday:</label>
            <input
              type="date"
              name="birthday"
              id="birthday"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
            />
          </div> */}
          <button type="submit" className="form-button">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
