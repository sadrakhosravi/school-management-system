import React from 'react';

// Router
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Context
import GlobalProvider from './context/Provider';

// Styles
import './styles/reset.css';
import './styles/global.css';

// Components
import Header from './components/Header';

// Pages
import Courses from './pages/Courses';
import CourseDetails from './pages/CourseDetails';
import UserSignIn from './pages/UserSignIn';
import UserSignUp from './pages/UserSignUp';

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Courses} />
            <Route exact path="/courses/:id" component={CourseDetails} />
            <Route exact path="/sign-in" component={UserSignIn} />
            <Route exact path="/sign-up" component={UserSignUp} />
          </Switch>
        </main>
      </Router>
    </GlobalProvider>
  );
};

export default App;
