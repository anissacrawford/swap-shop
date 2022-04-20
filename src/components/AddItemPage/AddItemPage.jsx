// imports 
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

// MUI styling
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

    return(
        
            <form>
            <ThemeProvider theme={theme}>
                <h2>Add Item:</h2>

                {/* item name */}
                <div>
                    <label htmlFor="itemName">
                    Item:
                    <TextField
                        variant="outlined"
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
                        variant="outlined"
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
                        variant="outlined"
                        type="text"
                        name="itemDescription"
                        value={itemDescription}
                        required
                        onChange={(event) => setItemDescription(event.target.value)}
                    />
                    </label>
                </div>

                <Button variant="contained" color="primary" onClick={() => {history.push('/profile');}}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={addItem}>Add Item</Button>

            </ThemeProvider>
            </form>
        
    )
}

export default AddItemPage;