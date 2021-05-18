import { isAfter } from 'date-fns';
import React, { useState, createContext } from 'react';
import AuthService from 'services/AuthService';

const AuthContext = createContext({});

const defaultUser = {
  authenticated: false,
  user: {
    name: null,
    sub: null,
    exp: null,
    iat: null,
  },
};

const tokenIsExpired = token => isAfter(new Date(), new Date(token * 1000));

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const tokenParsed = AuthService.getLoggedUser();

    if (tokenParsed && !tokenIsExpired(tokenParsed.exp)) {
      return {
        user: tokenParsed,
        authenticated: true,
      };
    }

    return defaultUser;
  });

  const signIn = async (email, password) => {
    return new Promise((resolve, reject) => {
      AuthService.login(email, password)
        .then(user => {
          const obj = { user, authenticated: true };
          setUser(obj);
          resolve(obj);
        })
        .catch(msg => reject(msg));
    });
  };

  const logout = () => {
    AuthService.logout();
    setUser(defaultUser);
  };

  const useContext = {
    user,
    signIn,
    logout,
  };

  return (
    <AuthContext.Provider value={useContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
