import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="error-page">
      <h1 className="error-page--text">Sorry, the page you were looking for was not found!</h1>
      <Link to="/" className="button">
        Home Page
      </Link>
    </div>
  );
};
export default NotFound;
