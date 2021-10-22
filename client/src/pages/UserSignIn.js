import React from 'react';
import { Link } from 'react-router-dom';

const UserSignIn = () => {
  return (
    <div className="form--centered">
      <h2>Sign In</h2>

      <form>
        <label htmlFor="emailAddress">Email Address</label>
        <input id="emailAddress" name="emailAddress" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
        <button className="button" type="submit">
          Sign In
        </button>
        <Link to="/" className="button button-secondary">
          Cancel
        </Link>
      </form>
      <p>
        Don't have a user account? Click here to <Link to="/sign-up">sign up</Link>!
      </p>
    </div>
  );
};
export default UserSignIn;
