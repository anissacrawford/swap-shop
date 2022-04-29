//imports
import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';

//MUI Styling
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

function LoginPage() {
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
        <LoginForm />

        <center>
          <button
            type="button"
            className="btn btn_asLink"
            onClick={() => {
              history.push('/registration');
            }}
          >
            Register
          </button>
        </center>
      </div>
    </ThemeProvider>
  );
}

export default LoginPage;
