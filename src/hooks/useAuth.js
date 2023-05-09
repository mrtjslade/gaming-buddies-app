import { useState, useEffect } from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, [auth]);

  const logout = async () => {
    try {
      await signOut(auth);
      navigate('/login'); // Redirect to the login page after logout
    } catch (error) {
      console.log('Logout error:', error);
    }
  };

  return { user, logout };
};

export { useAuth };