//imports 
import { useHistory } from 'react-router-dom';
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

function ShopItem ({anItem}){

    const history = useHistory();
    const classes = useStyles();
    const dispatch = useDispatch();

    const theme = createTheme({
        palette: {
          primary: {
            main: '#36802d'
          }
        }
      })

    const swap = () => {
        dispatch({type: 'GET_PROFILE_ITEM', payload: anItem.id});
        dispatch({type: 'SET_OFFER_ITEM_A', payload: anItem})
        history.push(`/swap`);
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={12} s={6} md={3} lg={4}>
                <div className={classes.root}>
                    <Paper elevation={3}>
                        <ul className="center">
                            {/* <li className="center">User: {anItem.username}</li> */}
                            <li><img src={anItem.item_image}/></li>
                            <li>Item: {anItem.item_name}</li>
                            <li>Description: {anItem.item_description}</li>
                            <Button variant="contained" color="primary" onClick={swap}>swap</Button>
                        </ul>
                    </Paper>
                </div>
            </Grid>
        </ThemeProvider>
    )
}

export default ShopItem; 