// imports 
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI styling
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {Grid } from '@material-ui/core';

function AddItemPage(){

    const [itemName, setItemName] = useState('');
    const [itemImage, setItemImage] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const theme = createTheme({
        palette: {
          primary: {
            main: '#36802d'
          }
        }
      })

    const addItem = () => {
        console.log(itemName);

        dispatch({
            type: 'POST_ITEM',
            payload: {
                itemName: itemName,
                itemImage: itemImage,
                itemDescription: itemDescription
            },
        });
        history.push('/profile');
    }; //end addItem

    //for presentation purposes 
    const presentation = () => {
        setItemName("CanDle"),
        setItemImage("https://images.unsplash.com/photo-1510028735437-476418ee352d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuZGxlJTIwZm9yJTIwc2FsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"),
        setItemDescription("One Candle (Vanilla Scented)")
    }

    return(
            <ThemeProvider theme={theme}>
            <form>
                 <h2 className="center" onClick={presentation}>Add Item</h2>

                <Grid item xs={12} s={6} md={3} lg={4}
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center">
                {/* item name */}
                <div>
                    <label htmlFor="itemName">
                    Item:
                    <TextField
                        type="text"
                        name="itemName"
                        value={itemName}
                        required
                        onChange={(event) => setItemName(event.target.value)}
                    />
                    </label>
                </div>

                {/* item image */}
                <div>
                    <label htmlFor="itemImage">
                    Image:
                    <TextField
                        type="text"
                        name="itemImage"
                        value={itemImage}
                        required
                        onChange={(event) => setItemImage(event.target.value)}
                    />
                    </label>
                </div>

                {/* item description */}
                <div>
                    <label htmlFor="itemDescription">
                    Description:
                    <TextField
                        type="text"
                        name="itemDescription"
                        value={itemDescription}
                        required
                        onChange={(event) => setItemDescription(event.target.value)}
                    />
                    </label>
                </div>
                </Grid>

                <Grid item xs={12} s={6} md={3} lg={4}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                <Button variant="contained" color="primary" onClick={() => {history.push('/profile');}}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={addItem}>Add Item</Button>

                </Grid>
            </form>
            </ThemeProvider>
    )
}

export default AddItemPage;