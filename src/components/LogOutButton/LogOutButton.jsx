//imports
import React from 'react';
import { useDispatch } from 'react-redux';

//MUI Styling 
import Button from '@material-ui/core/Button';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

function LogOutButton(props) {

  const dispatch = useDispatch();

  const theme = createTheme({
    palette: {
      primary: {
        main: '#36802d'
      }
    }
  })

  return (
    <ThemeProvider theme={theme}>
      <button variant="contained" color="primary"
        // This button shows up in multiple locations and is styled differently
        // because it's styled differently depending on where it is used, the className
        // is passed to it from it's parents through React props
        className={props.className}
        onClick={() => dispatch({ type: 'LOGOUT' })}
      >
        Log Out
      </button>
    </ThemeProvider>
  );
}

export default LogOutButton;
