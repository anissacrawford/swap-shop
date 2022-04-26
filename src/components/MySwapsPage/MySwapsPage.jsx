//imports 
import { useDispatch, useSelector } from 'react-redux';

//MUI Styling
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import {Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(40),
      height: theme.spacing(40),
      },
  },
  }));

function MySwapsPage (){

    const dispatch = useDispatch();
    const offer = useSelector(store => store.offer);
    const classes = useStyles();
    const offerId = useSelector(store => store.offerId);
    const incomingSwap = useSelector(store => store.incomingSwap);


    const theme = createTheme({
        palette: {
          primary: {
            main: '#36802d'
          }
        }
      })

    const handleDecline = () => {
      //delete from offer table 
      console.log('ID', offerId);
      dispatch({type: 'DELETE_OFFER',
                payload: offerId})
    }

    const handleAccept = () => {
      //swap items on offer table 
      dispatch({type: 'PUT_OFFER',
                payload: { 
                  offerId: offerId[0].id,
                  userA: offer?.itemB.user_id,
                  itemA: offer?.itemA.id,
                  userB: offer?.itemA.user_id,
                  itemB: offer?.itemB.id
                }})
      //updates user id of item A
      dispatch({type: 'PUT_OFFER_A', 
                payload: {
                  userA: offer?.itemB.user_id,
                  itemA: offer?.itemA.id
                }});
      //updates user id of item B 
      dispatch({type: 'PUT_OFFER_B', 
                payload: {
                  userB: offer?.itemA.user_id,
                  itemB: offer?.itemB.id
                }});
    }
    
    return (
        <>
        <ThemeProvider theme={theme}>
        <h1 className="center">My Swaps</h1>

        {/* item A */}
        <h2 className="center">For your...</h2>
          <Grid item xs={12} s={6} md={3} lg={4}>
            <div className={classes.root}>
              <Paper elevation={3}>
                <ul>
                  <li><img src={offer?.itemA?.item_image}/></li>
                  <li>Name: {offer?.itemA?.item_name}</li>
                  <li>Description: {offer?.itemA?.item_description}</li>
                </ul>
              </Paper>
            </div>
          </Grid>

        {/* item B */}
        <h2 className="center">They will trade...</h2>
          <Grid item xs={12} s={6} md={3} lg={4}>
            <div className={classes.root}>
              <Paper elevation={3}>
                <ul>
                  <li><img src={offer?.itemB?.item_image}/></li>
                  <li>Name: {offer?.itemB?.item_name}</li>
                  <li>Description: {offer?.itemB?.item_description}</li>
                </ul>
              </Paper>
            </div>
          </Grid>

        {/* buttons */}
        <Button variant="contained" color="primary" onClick={handleDecline}>decline</Button>
        <Button variant="contained" color="primary" onClick={handleAccept}>accept</Button>
        </ThemeProvider>
        </>
    )
}

export default MySwapsPage;