import React from 'react';
import { Redirect, Route } from 'react-router';

const ProtectedRoute = ({ exact = false, path, component, isAuth }) =>
  isAuth ? <Route exact path={path} component={component} /> : <Redirect to="/sign-in" />;

export default ProtectedRoute;
