import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Components

// Context
import { useGlobalContext } from '../context/Provider';

// Actions
import signUp from '../context/actions/user/sign-up';
import ValidationError from '../components/ValidationError';

const UserSignUp = () => {
  const [error, setError] = useState(false);
  const [formInputData, setFormInputData] = useState({});
  const { userDispatcher } = useGlobalContext();
  const history = useHistory();

  const handleInputChange = event => {
    const { name, value } = event.target;
    // Use input names and dynamically assign a state name and value.
    setFormInputData(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  // Handles signup form submission.
  const handleSubmit = async event => {
    event.preventDefault();
    const data = {
      firstName: formInputData.firstName,
      lastName: formInputData.lastName,
      emailAddress: formInputData.emailAddress,
      password: formInputData.password,
    };

    // Send data to the api and await response.
    const isSignedUp = await signUp(userDispatcher, data);

    // If signup was successful, redirect to the courses page, else display an error message.
    isSignedUp === true ? history.push('/sign-in') : setError(isSignedUp.error);
  };

  console.log(error);

  return (
    <div className="form--centered">
      <h2>Sign Up</h2>
      {error && <ValidationError messages={error.message} />}
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" type="text" onChange={handleInputChange} />
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" type="text" onChange={handleInputChange} />
        <label htmlFor="emailAddress">Email Address</label>
        <input id="emailAddress" name="emailAddress" type="email" onChange={handleInputChange} />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" onChange={handleInputChange} />
        <button className="button" type="submit">
          Sign Up
        </button>
        <Link to="/" className="button button-secondary">
          Cancel
        </Link>
      </form>
      <p>
        Already have a user account? Click here to <Link to="/sign-in">sign in</Link>!
      </p>
    </div>
  );
};
export default UserSignUp;
