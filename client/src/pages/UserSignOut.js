import React, { useEffect } from 'react';
import { Redirect } from 'react-router';

// Context
import { useGlobalContext } from '../context/Provider';

// Actions
import signOut from '../context/actions/user/sign-out';

const UserSignOut = () => {
  const { userDispatcher } = useGlobalContext();

  useEffect(() => {
    signOut(userDispatcher);
  });

  return <Redirect to="/" />;
};
export default UserSignOut;
