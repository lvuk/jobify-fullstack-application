import React, { useContext, useState, useReducer } from 'react';

const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: '',
  alertTtpe: '',
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, initialState, useAppContext };
