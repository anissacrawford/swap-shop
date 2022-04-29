//imports
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';
import RegisterForm from '../RegisterForm/RegisterForm';

//MUI styling 
import Button from '@material-ui/core/Button';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';


function LandingPage() {

  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#36802d'
      }
    }
  })

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="container">
        <h2>{heading}</h2>

        <div className="grid">
          <div className="grid-col grid-col_8">
            <p></p>

          </div>
          <div className="grid-col grid-col_4">
            <RegisterForm />

            <center>
              <h4>Already a Member?</h4>
              <Button variant="contained" color="primary" className="btn btn_sizeSm" onClick={onLogin}>
                Login
              </Button>
            </center>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default LandingPage;
