import React, { createContext, useContext, useReducer } from 'react';

import { coursesInitialState, userInitialState } from './initialStates';
import coursesReducer from './reducers/coursesReducer';
import userReducer from './reducers/userReducer';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [courses, coursesDispatcher] = useReducer(coursesReducer, coursesInitialState);
  const [user, userDispatcher] = useReducer(userReducer, userInitialState);

  return (
    <GlobalContext.Provider value={{ courses, coursesDispatcher, user, userDispatcher }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider;
