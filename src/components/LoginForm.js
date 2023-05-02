import React from 'react';
import './LoginForm.css';

function LoginForm() {
  return (
    <div className="login-form">

      <form>
        <label>
          <span>Email:</span>
          <input type="email" name="email" />
        </label>
        <label>
          <span>Password:</span>
          <input type="password" name="password" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
