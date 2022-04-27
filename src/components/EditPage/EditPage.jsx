//imports
import {useEffect} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//MUI styling 
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';


function EditPage (){

    const history = useHistory();
    const editItem = useSelector((store) => store.editItem);
    const dispatch = useDispatch();
    const id = useParams().id;

    const theme = createTheme({
        palette: {
          primary: {
            main: '#36802d'
          }
        }
      })

    useEffect(() => {
        dispatch({type: 'GET_EDIT_ITEM', payload: id})
    }, [id] )

    function handleChange(event, property){
        dispatch({
            type: 'EDIT_ONCHANGE', 
            payload: { property: property, value: event.target.value }
        })
    }

    function handleSubmit(event){
        event.preventDefault();
        dispatch({type: 'UPDATE_ITEM', payload: editItem});
        dispatch({type: 'CLEAR_EDIT'});
        history.push('/profile');
    }

    return(
        <ThemeProvider theme={theme}>
        <h2 className="center">Edit Item</h2>

        <form>
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
                    value={editItem.item_name}
                    onChange={(event) => handleChange(event, 'item_name')}
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
                    value={editItem.item_image}
                    onChange={(event) => handleChange(event, 'item_image')}
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
                    value={editItem.item_description}
                    onChange={(event) => handleChange(event, 'item_description')}
                />
                </label>
            </div>
            </Grid>
        </form>
        <Grid item xs={12} s={6} md={3} lg={4}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
        <Button variant="contained" color="primary" onClick={() => {history.push('/profile');}}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Save</Button>
        </Grid>
        </ThemeProvider>
    )
}

export default EditPage;