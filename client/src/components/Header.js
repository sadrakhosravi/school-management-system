import React from 'react';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../context/Provider';

const Header = () => {
  const { user } = useGlobalContext();
  console.log(user);

  return (
    <header>
      <div className="wrap header--flex">
        <h1 className="header--logo">
          <Link to="/">Courses</Link>
        </h1>
        <nav>
          <ul className="header--signedout">
            <li>
              {user.firstName && `Welcome, ${user.firstName} ${user.lastName}`}
              {!user.firstName && <Link to="/sign-up">Sign Up</Link>}
            </li>
            <li>
              {user.firstName && <Link to="/sign-out">Sign Out</Link>}
              {!user.firstName && <Link to="/sign-in">Sign In</Link>}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
