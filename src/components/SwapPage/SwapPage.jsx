//imports
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';

//MUI Styling
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(45),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
      },
  },
  }));
  
function SwapPage (){
    
    const dispatch = useDispatch();
    const history = useHistory();
    const item = useSelector(store => store.item);
    const offer = useSelector(store => store?.offer);
    const classes = useStyles();

    const theme = createTheme({
        palette: {
          primary: {
            main: '#36802d'
          }
        }
      })

    const handleSelect = (anItem) => {
      dispatch({type: 'SET_OFFER_ITEM_B', payload: anItem});

    }

    const cancelOffer = () => {
      history.push('/shop')
    }

    const confirmOffer = () => {
      Swal.fire({
        title: "Offer Sent",
        icon: 'success',
        background: 'white',
        color: 'black',
        confirmButtonColor: '#36802d',
        cancelButtonColor: '#36802d',
        });


      history.push('/shop')
      dispatch({type: 'POST_OFFER', 
                payload: {
                  userA: offer?.itemA.user_id,
                  itemA: offer?.itemA.id,
                  userB: offer?.itemB.user_id,
                  itemB: offer?.itemB.id
      }})
    }

    return (
      <ThemeProvider theme={theme}>
      <Grid item xs={12} s={6} md={3} lg={4}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
      <h1 className="center">Swap Page</h1>

      {/* Item A */}
        <h2 className="center">For Your...</h2>
              <div className={classes.root}>
                <Paper elevation={10}>
                  <ul className="center" key={offer?.itemA?.id}>
                      <li><img src={offer?.itemA?.item_image}/></li>
                      <li className="bold">{offer?.itemA?.item_name}</li>
                      <li>{offer?.itemA?.item_description}</li>
                  </ul>
                </Paper>
              </div>
          
        {/* Item B */}
        <h2 className="center">I will trade...</h2>
        {item?.map((anItem) => {
            return(
              <div className={classes.root}>
                <Paper elevation={10}>
                  <ul className="center" key={anItem.id} anItem={anItem}>
                      <li><img src={anItem.item_image}/></li>
                      <li className="className">{anItem.item_name}</li>
                      <li>{anItem.item_description}</li>
                      <Button variant="contained" color="primary" onClick={() => handleSelect(anItem)}>Select</Button>
                  </ul>
                </Paper>
              </div>
            )
        })}
        </Grid>

        <Grid item xs={12} s={6} md={3} lg={4}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
        <Button variant="contained" color="primary" onClick={cancelOffer}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={confirmOffer}>Confirm</Button>
        </Grid>
        </ThemeProvider>
    )
}

export default SwapPage;
