import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      console.log('Login successful:', user);

      // Redirect to the Marketplace page after successful login
      navigate('/marketplace');
    } catch (error) {
      console.log('Login error:', error);
      setLoginError('Incorrect email or password.');
    }
  };

  return (
    <div className="login-form">
      <form onSubmit={handleLogin}>
        <label>
          <span>Email:</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={loginError && 'error'}
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={loginError && 'error'}
          />
        </label>
        {loginError && <p className="error-message">{loginError}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
