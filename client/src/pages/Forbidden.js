import React from 'react';
import { Link } from 'react-router-dom';

const Forbidden = () => {
  return (
    <div className="error-page">
      <h1 className="error-page--text">You do not have access to this page! Please sign in first.</h1>
      <Link to="/sign-in" className="button">
        Sign In
      </Link>
    </div>
  );
};
export default Forbidden;
