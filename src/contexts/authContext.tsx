import { createContext, useContext, useState } from 'react';

const AuthContext = createContext({isLoggedIn: false, login: () => {}, logout: () => {}});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        setIsLoggedIn(true);
        console.log('Logado com sucesso!');
        resolve(true);
      }, 1000);
    });
  };
  

  const logout = () => {
    setIsLoggedIn(false);
    console.log('Deslogado com sucesso!');
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
