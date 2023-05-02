import React from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  return (
    <div className="form-container">
      <div className="form-content">
        <h2>Create an Account</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input type="text" name="firstName" id="firstName" />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input type="text" name="lastName" id="lastName" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input type="password" name="confirmPassword" id="confirmPassword" />
          </div>
          <div className="form-group">
            <label htmlFor="birthday">Birthday:</label>
            <input type="date" name="birthday" id="birthday" />
          </div>
          <button type="submit" className="form-button">Create Account</button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
