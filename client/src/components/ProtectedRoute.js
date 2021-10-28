import React from 'react';
import { Route } from 'react-router';

// Pages
import Forbidden from '../pages/Forbidden';

const ProtectedRoute = ({ exact = false, path, component, isAuth }) =>
  isAuth ? <Route exact path={path} component={component} /> : <Forbidden />;

export default ProtectedRoute;
