//imports 
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Item from '../Item/Item';

//MUI Styling 
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

function ProfilePage (){

    const dispatch = useDispatch();
    const item = useSelector(store => store.item);
    const history = useHistory();

    const theme = createTheme({
        palette: {
          primary: {
            main: '#36802d'
          }
        }
      })

    useEffect(() => {
        // dispatch to get all items to display on the DOM
        dispatch({ type: 'GET_ITEM' });
    }, []);

    return (
        <ThemeProvider theme={theme}>
        <h2>My items</h2>

        <div>
            {item?.map((anItem) => {
                return(
                    <Item key={anItem.id} anItem={anItem} />
                )})}
                
            <Button variant="contained" color="primary" onClick={() => {history.push('/additem');}}>add item</Button>
        </div>
        </ThemeProvider>
    )
}

export default ProfilePage;