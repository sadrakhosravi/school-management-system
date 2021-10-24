import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Context
import { useGlobalContext } from '../context/Provider';

// Actions
import signIn from '../context/actions/user/sign-in';

const UserSignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { userDispatcher, user } = useGlobalContext();
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    const data = {
      username,
      password,
    };
    const isSignedIn = await signIn(userDispatcher, data);

    // If the api validates the credential, navigate to the home page
    isSignedIn && history.push('/');
  };

  return (
    <div className="form--centered">
      <h2>Sign In</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="emailAddress">Email Address</label>
        <input
          id="emailAddress"
          name="emailAddress"
          type="email"
          onChange={e => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" onChange={e => setPassword(e.target.value)} />
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
