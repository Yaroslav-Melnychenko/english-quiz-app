import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/sign-in" component={SignIn} />
  </Router>
);

export default App;
