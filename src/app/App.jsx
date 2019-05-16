import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import Grammar from '../pages/Test/Grammar';
import Listening from '../pages/Test/Listening';

const App = () => (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/sign-in" component={SignIn} />
    <Route path="/quiz/grammar" component={Grammar} />
    <Route path="/quiz/listening" component={Listening} />
  </Router>
);

export default App;
