//imports 
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

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
        width: theme.spacing(30),
        height: theme.spacing(20),
        },
    },
    }));

function ShopItem ({anItem}){

    const history = useHistory();
    const item = useSelector(store => store.item);
    const classes = useStyles();

    const theme = createTheme({
        palette: {
          primary: {
            main: '#36802d'
          }
        }
      })

    const swap = () => {
        // coming back undefined 
        console.log('HI', item.id);
        history.push(`/swap/`);
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={12} s={6} md={3} lg={4}>
                <div className={classes.root}>
                    <Paper elevation={3}>
                        <ul>
                            <li>User: {anItem.username}</li>
                            <li>Image: {anItem.item_image}</li>
                            <li>Name: {anItem.item_name}</li>
                            <li>Description: {anItem.item_description}</li>
                            <Button variant="contained" color="primary"  onClick={swap}>swap?</Button>
                        </ul>
                    </Paper>
                </div>
            </Grid>
        </ThemeProvider>
    )
}

export default ShopItem; 