import React from 'react';

// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Context
import GlobalProvider from './context/Provider';

// Styles
import './styles/reset.css';
import './styles/global.css';

// Constants
import { COURSE_DETAILS, COURSE_NEW, COURSE_UPDATE } from './utils/constants/Routes';

// Components
import Header from './components/Header';

// Pages
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import CreateCourse from './pages/CreateCourse';
import UpdateCourse from './pages/UpdateCourse';
import UserSignIn from './pages/UserSignIn';
import UserSignUp from './pages/UserSignUp';
import UserSignOut from './pages/UserSignOut';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Courses} />
            <Route exact path={COURSE_NEW} component={CreateCourse} />
            <Route exact path={COURSE_UPDATE} component={UpdateCourse} />
            <Route exact path={COURSE_DETAILS} component={CourseDetails} />
            <Route exact path="/sign-in" component={UserSignIn} />
            <Route exact path="/sign-up" component={UserSignUp} />
            <Route exact path="/sign-out" component={UserSignOut} />
          </Switch>
        </main>
      </Router>
    </GlobalProvider>
  );
};

export default App;
