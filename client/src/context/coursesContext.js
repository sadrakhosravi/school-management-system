import React, { useContext, useState, useEffect, createContext } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';

const CoursesContext = createContext();

const CoursesContextProvider = ({ children }) => {
  // Initialize state
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch data and set states
  useEffect(() => {
    (async () => {
      let url = 'http://localhost:5000/api/courses';
      const response = await axios.get(url);
      const data = await response.data;
      setIsLoading(false);
      setCourses(data);
    })();
  }, []);

  return (
    <CoursesContext.Provider value={{ courses, isLoading }}>
      {isLoading && <Spinner />}
      {!isLoading && children}
    </CoursesContext.Provider>
  );
};

export default CoursesContextProvider;

// Create a hook to use the CoursesContext, this is a Kent C. Dodds pattern
export function useGetCourses() {
  const context = useContext(CoursesContext);
  if (context === undefined) {
    throw new Error('Context must be used within a Provider');
  }
  return context;
}
