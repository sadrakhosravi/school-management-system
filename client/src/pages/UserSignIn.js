import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Components
import ValidationError from '../components/ValidationError';

// Context
import { useGlobalContext } from '../context/Provider';

// Actions
import signIn from '../context/actions/user/sign-in';

const UserSignIn = () => {
  const [formInputData, setFormInputData] = useState({});
  const [error, setError] = useState(false);
  const { userDispatcher } = useGlobalContext();
  const history = useHistory();

  const handleInputChange = event => {
    const { name, value } = event.target;
    // Use input names and dynamically assign a state name and value.
    setFormInputData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  // Handles sign-in form submission.
  const handleFormSubmit = async event => {
    event.preventDefault();
    const userCredentials = {
      username: formInputData.emailAddress,
      password: formInputData.password,
    };

    // Send the data to the api and await response.
    const isSignedIn = await signIn(userDispatcher, userCredentials);

    // If sign-in was successful, redirect to the courses page, else display an error message.
    isSignedIn === true ? history.push('/') : setError(isSignedIn.error);
  };

  return (
    <div className="form--centered">
      <h2>Sign In</h2>
      {error && <ValidationError message={error.message} />}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="emailAddress">Email Address</label>
        <input id="emailAddress" name="emailAddress" type="email" onChange={handleInputChange} />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" onChange={handleInputChange} />
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
