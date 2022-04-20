//imports
import { useHistory } from 'react-router-dom';

//MUI Styling
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

function SwapPage (){
    
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
        <>
        <h1>Swap Page</h1>

        <h2>For Your...</h2>
        <h3>Item image</h3>
        <h3>Item name</h3>
        <h3>Item description</h3>

        <h2>I will trade...</h2>
        <h3>dropdown</h3>
        <h3>Item image</h3>
        <h3>Item name</h3>
        <h3>Item description</h3>

        <Button variant="contained" color="primary" onClick={() => {history.push('/shop');}}>Cancel</Button>
        <Button variant="contained" color="primary">Confirm</Button>
        </>
        </ThemeProvider>
    )
}

export default SwapPage;