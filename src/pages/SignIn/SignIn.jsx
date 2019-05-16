import React from 'react';
import TextField from '@material-ui/core/TextField';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FaUnlockAlt } from 'react-icons/fa';
import './SignIn.scss';

const SignIn = () => {
  return (
    <div className="form-container">
      <Avatar>
        <FaUnlockAlt />
      </Avatar>
      <h3 className="main-text">Sign in</h3>
      <form>
        <TextField
          className="input-field"
          name="email"
          label="Email address *"
          // value=""
          margin="normal"
        />
        <TextField
          className="input-field"
          name="password"
          label="Your password *"
          // value=""
          margin="normal"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <div className="btn-container">
          <Button className="btn" variant="contained" color="primary">Sign in</Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
