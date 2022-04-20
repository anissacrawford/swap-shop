//imports
import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux';

//MUI styling 
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import {Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

function ProfileItem({anItem}) {

    const history = useHistory();
    const dispatch = useDispatch();

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
            <Paper elevation={3}>
                <ul>
                    <li>User: {anItem.username}</li>
                    <li>Image: {anItem.item_image}</li>
                    <li>Name: {anItem.item_name}</li>
                    <li>Description: {anItem.item_description}</li>
                    <Button variant="contained" color="primary" onClick={handleClick}>edit</Button>
                    <Button variant="contained" color="primary" onClick={(event) => dispatch({ type:'DELETE_ITEM', payload: anItem.id})}>delete</Button>
                </ul>
            </Paper>
            </Grid>
        </ThemeProvider>
    )
}

export default ProfileItem;