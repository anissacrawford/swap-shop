//imports
import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux';

//MUI styling 
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


function ProfileItem({anItem}) {

    const history = useHistory();
    const dispatch = useDispatch();
    const classes = useStyles();

    const theme = createTheme({
        palette: {
          primary: {
            main: '#36802d'
          }
        }
      })


    const handleClick = () => {
        dispatch({type: 'SET_EDIT_ITEM', payload: anItem})
        history.push(`/edit/${anItem.id}`);
    }

    return (
        <ThemeProvider theme={theme}>
            <Grid item xs={12} s={6} md={3} lg={4}>
                <div className={classes.root}>
                    <Paper elevation={3}>
                        <ul>
                            <li>Image: {anItem.item_image}</li>
                            <li>Item: {anItem.item_name}</li>
                            <li>Description: {anItem.item_description}</li>
                            <Button variant="contained" color="primary" onClick={handleClick}>edit</Button>
                            <Button variant="contained" color="primary" onClick={(event) => dispatch({ type:'DELETE_ITEM', payload: {id: anItem.id}})}>delete</Button>
                        </ul>
                    </Paper>
                </div>
            </Grid>
        </ThemeProvider>
    )
}

export default ProfileItem;