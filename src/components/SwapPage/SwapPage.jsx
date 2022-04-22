//imports
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//MUI Styling
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(30),
      height: theme.spacing(15)
      },
  },
  }));
  


function SwapPage (){
    
    const dispatch = useDispatch();
    const history = useHistory();
    const item = useSelector(store => store.item);
    const offer = useSelector(store => store.offer);
    const classes = useStyles();

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
      dispatch({type: 'UPDATE_SHOP_ITEM'})
    }

    return (
      <ThemeProvider theme={theme}>
      <h1 className="center">Swap Page</h1>

      {/* Item A */}
        <h2 className="center">For Your...</h2>
        {offer.map((itemA) => {
            return(
              <div className={classes.root}>
                <Paper elevation={3}>
                  <ul key={itemA.id}>
                      <li>Image: {itemA.item_image}</li>
                      <li>Name: {itemA.item_name}</li>
                      <li>Description: {itemA.item_description}</li>
                  </ul>
                </Paper>
              </div>
            )
        })}
          
        {/* Item B */}
        <h2 className="center">I will trade...</h2>
        {item.map((anItem) => {
            return(
              <div className={classes.root}>
                <Paper elevation={3}>
                  <ul  key={anItem.id} anItem={anItem}>
                      <li>Image: {anItem.item_image}</li>
                      <li>Name: {anItem.item_name}</li>
                      <li>Description: {anItem.item_description}</li>
                      <Button variant="contained" color="primary" onClick={() => swap(anItem)}>Select</Button>
                  </ul>
                </Paper>
              </div>
            )
        })}

        <Button variant="contained" color="primary" onClick={cancelOffer}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={confirmOffer}>Confirm</Button>
        </ThemeProvider>
    )
}

export default SwapPage;
