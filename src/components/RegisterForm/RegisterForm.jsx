//imports 
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//MUI Styling 
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


function RegisterForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();

    const registerUser = (event) => {
      event.preventDefault();

      dispatch({
        type: 'REGISTER',
        payload: {
          username: username,
          password: password,
          firstName: firstName,
          lastName: lastName,
          emailAddress: emailAddress
        },
      });
    }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>

      <h2>Register!!!</h2>

      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}

      {/* username */}
      <div>
        <label htmlFor="username">
          Username:
          <TextField
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>

      {/* password */}
      <div>
        <label htmlFor="password">
          Password:
          <TextField
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>

      {/* first name */}
      <div>
        <label htmlFor="firstName">
          First Name:
          <TextField
            type="text"
            name="firstName"
            value={firstName}
            required
            onChange={(event) => setFirstName(event.target.value)}
          />
        </label>
      </div>

      {/* last name */}
      <div>
        <label htmlFor="lastName">
          Last Name:
          <TextField
            type="text"
            name="lastName"
            value={lastName}
            required
            onChange={(event) => setLastName(event.target.value)}
          />
        </label>
      </div>

      {/* email */}
      <div>
        <label htmlFor="emailAddress">
          Email:
          <TextField
            type="text"
            name="emailAddress"
            value={emailAddress}
            required
            onChange={(event) => setEmailAddress(event.target.value)}
          />
        </label>
      </div>

      <div>
        {/* <input className="btn" type="submit" name="submit" value="Register" /> */}
        <Button variant="contained" color="primary" type="submit" name="submit" value="Register">Register </Button>
      </div>
      
    </form>
  );
}

export default RegisterForm;
