import React, { createContext, useContext, useReducer } from 'react';
import { coursesInitialState } from './initialStates';
import coursesReducer from './reducers/coursesReducer';

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [courses, coursesDispatch] = useReducer(coursesReducer, coursesInitialState);

  return <GlobalContext.Provider value={{ courses, coursesDispatch }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalProvider;
