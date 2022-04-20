//imports
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import ShopItem from '../ShopItem/ShopItem';

//MUI Styling
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

function ShopPage (){

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
        <div>
        <h2>The Shop</h2>
        {item?.map((anItem) => {
            return(
               <ShopItem key={anItem.id} anItem={anItem}/>
            )
        })}
        </div>
    </ThemeProvider>
    )
}

export default ShopPage;