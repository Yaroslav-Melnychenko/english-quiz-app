import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './Home.scss';

const Home = () => {
  const GetStartedLink = props => <Link to="/sign-in" {...props} />;

  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1>Hello in English quizz application</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Button variant="contained" color="primary" component={GetStartedLink}>Get Started</Button>
      </div>
    </div>
  );
};

export default Home;
