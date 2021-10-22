import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="wrap header--flex">
        <h1 className="header--logo">
          <Link to="/">Courses</Link>
        </h1>
        <nav>
          <ul className="header--signedout">
            <li>
              <Link to="/sign-up">Sign Up</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
