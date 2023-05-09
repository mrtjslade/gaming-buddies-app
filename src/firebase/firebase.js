// Import the necessary Firebase modules
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import buddies from '../components/buddies';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const firestore = getFirestore(app);

const useAuth = () => {
  const [user, setUser] = useState(null); // Track the user state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user); // Update the user state when the authentication state changes
    });

    return unsubscribe; // Unsubscribe from the onAuthStateChanged event when the component unmounts
  }, []);

  const logout = async () => {
    try {
      await signOut(auth); // Use the signOut function from the auth module
      return true; // Return true to indicate successful logout
    } catch (error) {
      console.log('Logout error:', error);
      return false; // Return false to indicate logout error
    }
  };

  return { user, logout }; // Return the user state and logout function
};

// Function to add buddies to Firestore collection
const addBuddiesToFirestore = async (buddies) => {
  try {
    const buddiesCollectionRef = collection(firestore, 'buddies');
    const buddiesSnapshot = await getDocs(buddiesCollectionRef);

    if (buddiesSnapshot.empty) {
      // Only add buddies if the collection is empty
      for (const buddy of buddies) {
        await addDoc(buddiesCollectionRef, buddy);
      }

      console.log('Buddies added to Firestore successfully!');
    } else {
      console.log('Buddies collection already exists in Firestore.');
    }
  } catch (error) {
    console.error('Error adding buddies to Firestore:', error);
  }
};


// Function to fetch buddies from Firestore collection
const getBuddiesFromFirestore = async () => {
  try {
    const buddiesCollectionRef = collection(firestore, 'buddies');
    const buddiesSnapshot = await getDocs(buddiesCollectionRef);
    const buddies = buddiesSnapshot.docs.map((doc) => doc.data());

    return buddies;
  } catch (error) {
    console.error('Error fetching buddies from Firestore:', error);
    return [];
  }
};

// Call the addBuddiesToFirestore function to add buddies to Firestore
addBuddiesToFirestore(buddies);

export { app, analytics, auth, useAuth, addBuddiesToFirestore, getBuddiesFromFirestore };
