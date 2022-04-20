//imports
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

//MUI Styling
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';


function SwapPage (){
    
    const history = useHistory();
    const item = useSelector(store => store.item);

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
        <h1 className="center">Swap Page</h1>

        <h2 className="center">For Your...</h2>
        <h3>Item image</h3>
        <h3>Item name</h3>
        <h3>Item description</h3>

        <h2 className="center">I will trade...</h2>
        {item.map((anItem) => {
            return(
                <ul key={anItem.id} anItem={anItem}>
                    <li>Image: {anItem.item_image}</li>
                    <li>Name: {anItem.item_name}</li>
                    <li>Description: {anItem.item_description}</li>
                    <Button variant="contained" color="primary">Select</Button>
                </ul>
            )
        })}

        <Button variant="contained" color="primary" onClick={() => {history.push('/shop');}}>Cancel</Button>
        <Button variant="contained" color="primary">Confirm</Button>
        </>
        </ThemeProvider>
    )
}

export default SwapPage;