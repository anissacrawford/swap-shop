//MUI Styling
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

function MySwapsPage (){

    const theme = createTheme({
        palette: {
          primary: {
            main: '#36802d'
          }
        }
      })
      
    return (
        <>
        <ThemeProvider theme={theme}>
        <h1>My Swaps Page</h1>
        <h2>Pending swaps</h2>
        <h3>Swap?</h3>
        <h3>Item image</h3>
        <h3>Item name</h3>
        <h3>Item description</h3>
        <Button variant="contained" color="primary">decline</Button>
        <Button variant="contained" color="primary">accept</Button>
        </ThemeProvider>
        </>
    )
}

export default MySwapsPage;