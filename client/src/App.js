import React, { useEffect } from 'react';

// Router
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Hooks
import useIsAuth from './hooks/useIsAuth';

// Styles
import './styles/reset.css';
import './styles/global.css';

// Constants
import { COURSE_DETAILS, COURSE_NEW, COURSE_UPDATE } from './utils/constants/Routes';

// Components
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import CreateCourse from './pages/CreateCourse';
import UpdateCourse from './pages/UpdateCourse';
import UserSignIn from './pages/UserSignIn';
import UserSignUp from './pages/UserSignUp';
import UserSignOut from './pages/UserSignOut';
import NotFound from './pages/NotFound';
import useCheckLocalStorage from './hooks/useCheckLocalStorage';

const App = () => {
  useCheckLocalStorage();
  const isAuth = useIsAuth();
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Courses} />
          <ProtectedRoute exact path={COURSE_NEW} component={CreateCourse} isAuth={isAuth} />
          <ProtectedRoute exact path={COURSE_UPDATE} component={UpdateCourse} isAuth={isAuth} />

          <Route exact path={COURSE_DETAILS} component={CourseDetails} />
          <Route exact path="/sign-in" component={UserSignIn} />
          <Route exact path="/sign-up" component={UserSignUp} />
          <Route exact path="/sign-out" component={UserSignOut} />
          <Route exact path="/not-found" component={NotFound} />
          <Route render={() => <Redirect to="/not-found" />} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
