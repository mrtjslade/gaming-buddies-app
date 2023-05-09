import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import './RegistrationForm.css';

function RegistrationForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formError, setFormError] = useState('');

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Check if any fields are empty
    if (!email || !password || !confirmPassword) {
      setFormError('Please fill in all fields.');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setFormError('Passwords do not match.');
      return;
    }

    try {
      const emailExists = await checkIfEmailExists(email);
      if (emailExists) {
        setFormError('Email already exists. Please go to the login page.');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log('Registration successful:', user);

      // Redirect to the marketplace page after successful registration
      navigate('/marketplace');
    } catch (error) {
      console.log('Registration error:', error);
      setFormError('Email already exists, please login.');
    }
  };

  const checkIfEmailExists = async (email) => {
    try {
      const authInstance = getAuth(auth);
      const methods = await fetchSignInMethodsForEmail(authInstance, email);
      return methods.length > 0;
    } catch (error) {
      console.log('Email existence check error:', error);
      return false;
    }
  };

  return (
    <div className="form-container">
      <div className="form-content">
        <h2>Create an Account</h2>
        <form onSubmit={handleRegister}>
          <div className={`form-group${formError ? ' error' : ''}`}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={formError ? 'error-input' : ''}
            />
          </div>
  
          <div className={`form-group${formError ? ' error' : ''}`}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={formError ? 'error-input' : ''}
            />
          </div>
  
          <div className={`form-group${formError ? ' error' : ''}`}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={formError ? 'error-input' : ''}
            />
            {formError && <p className="form-error">{formError}</p>}
          </div>
  
          <button type="submit" className="form-button">Create Account</button>
        </form>
      </div>
    </div>
  );
  
}

export default RegistrationForm;