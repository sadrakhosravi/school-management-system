import React from 'react';

// Styles
import './styles/reset.css';
import './styles/global.css';

// Components
import Header from './components/Header';
import Courses from './components/Courses';

const App = () => {
  return (
    <>
      <Header />
      <Courses />
    </>
  );
};

export default App;
