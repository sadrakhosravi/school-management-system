import React from 'react';
import { Link } from 'react-router-dom';

// Context
import { useGlobalContext } from '../context/Provider';

// Hooks
import useIsAuth from '../hooks/useIsAuth';

const Header = () => {
  const isAuth = useIsAuth();
  const { user } = useGlobalContext();

  return (
    <header>
      <div className="wrap header--flex">
        <h1 className="header--logo">
          <Link to="/">Courses</Link>
        </h1>
        <nav>
          <ul className="header--signedout">
            <li>
              {isAuth && `Welcome, ${user.firstName} ${user.lastName}`}
              {!isAuth && <Link to="/sign-up">Sign Up</Link>}
            </li>
            <li>
              {isAuth && <Link to="/sign-out">Sign Out</Link>}
              {!isAuth && <Link to="/sign-in">Sign In</Link>}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
