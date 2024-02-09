import React, { createContext, useContext, useState } from 'react';

const DataCtxt = createContext();

const DataContext = ({ children }) => {
  const [symb, setSymb] = useState(null);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <DataCtxt.Provider value={{ theme, toggleTheme }}>
      {children}
    </DataCtxt.Provider>
  );
};
