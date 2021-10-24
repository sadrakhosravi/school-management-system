import React, { useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';

// Context
import { useGlobalContext } from '../context/Provider';

// Actions
import signUp from '../context/actions/user/sign-up';

const UserSignUp = () => {
  const formRef = useRef(null);
  const { userDispatcher } = useGlobalContext();
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();
    const { firstName, lastName, emailAddress, password } = formRef.current;
    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      emailAddress: emailAddress.value,
      password: password.value,
    };
    const isSignedUp = await signUp(userDispatcher, data);
    if (isSignedUp) {
      // Reset fields
      firstName.value = '';
      lastName.value = '';
      emailAddress.value = '';
      password.value = '';

      // Redirect to sign in screen
      history.push('/sign-in');
    }
  };

  return (
    <div className="form--centered">
      <h2>Sign Up</h2>

      <form ref={formRef} onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input id="firstName" name="firstName" type="text" />
        <label htmlFor="lastName">Last Name</label>
        <input id="lastName" name="lastName" type="text" />
        <label htmlFor="emailAddress">Email Address</label>
        <input id="emailAddress" name="emailAddress" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" name="password" type="password" />
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
