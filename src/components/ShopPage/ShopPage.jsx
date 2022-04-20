//imports
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import ShopItem from '../ShopItem/ShopItem';

//MUI Styling
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

function ShopPage (){

    const dispatch = useDispatch();
    const item = useSelector(store => store.item);

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