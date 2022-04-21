//imports
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//MUI Styling
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';


function SwapPage (){
    
    const dispatch = useDispatch();
    const history = useHistory();
    const item = useSelector(store => store.item);

    const theme = createTheme({
        palette: {
          primary: {
            main: '#36802d'
          }
        }
      })

    const swap = (anItem) => {
      dispatch({type: `SET_OFFER_ITEM_B`, payload: anItem});
    }

    const cancelOffer = () => {
      history.push('/shop')
    }

    const confirmOffer = () => {
      history.push('/shop')
    }

    return (
        <ThemeProvider theme={theme}>
        <>
        <h1 className="center">Swap Page</h1>

        <h2 className="center">For Your...</h2>
        <h3>Item A</h3>

  
        <h2 className="center">I will trade...</h2>
        {item.map((anItem) => {
            return(
                <ul key={anItem.id} anItem={anItem}>
                    <li>Image: {anItem.item_image}</li>
                    <li>Name: {anItem.item_name}</li>
                    <li>Description: {anItem.item_description}</li>
                    <Button variant="contained" color="primary" onClick={() => swap(anItem)}>Select</Button>
                </ul>
            )
        })}

        <Button variant="contained" color="primary" onClick={cancelOffer}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={confirmOffer}>Confirm</Button>
        </>
        </ThemeProvider>
    )
}

export default SwapPage;