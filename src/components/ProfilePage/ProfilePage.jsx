//imports 
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import ProfileItem from '../ProfileItem/ProfileItem';

//MUI Styling 
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';

function ProfilePage (){

    const dispatch = useDispatch();
    const item = useSelector(store => store.item);
    const user = useSelector(store => store.user);
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
        dispatch({ type: 'GET_PROFILE_ITEM' });
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <h1 className="center">{user.username}'s Profile</h1>
            <h2 className="center">My items</h2>
            <Button variant="contained" color="primary" onClick={() => {history.push('/additem');}}>add item</Button>
                <div>
                    
                    {item?.map((anItem) => {
                        return(
                            <ProfileItem key={anItem.id} anItem={anItem} />
                        )})}
                        
                </div>
        </ThemeProvider>
    )
}

export default ProfilePage;