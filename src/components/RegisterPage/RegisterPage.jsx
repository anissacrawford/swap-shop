//imports 
import React from 'react';
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

//MUI Styling
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

function RegisterPage() {

  const history = useHistory();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#36802d'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
    <div>
      <RegisterForm />

      <center>
        <Button
          type="button"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      </center>
    </div>
    </ThemeProvider>
  );
}

export default RegisterPage;
