import { createContext, useContext, useState, useEffect } from 'react';
import Data from '../data/Data';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // const loggedInStatus = localStorage.getItem('loggedIn');
    if (Data.authCookieValue !== undefined) {
      setIsLoggedIn(true);
    }
  }, []);
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}