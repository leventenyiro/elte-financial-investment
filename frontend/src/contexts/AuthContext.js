import { createContext, useContext, useState, useEffect } from 'react';
import Data from '../data/Data';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(Data.authCookieValue !== undefined);

  // useEffect(() => {
  //   setIsLoggedIn(isLoggedIn);
  // }, [isLoggedIn]);
  
  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}