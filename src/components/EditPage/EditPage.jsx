//imports
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

//MUI styling 
import Button from '@material-ui/core/Button';
import {createTheme, ThemeProvider} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


function EditPage (){

    const history = useHistory();
    const editItem = useSelector((store) => store.editItem);
    const dispatch = useDispatch;

    const theme = createTheme({
        palette: {
          primary: {
            main: '#36802d'
          }
        }
      })

    function handleChange(){
        dispatch({
            type: 'EDIT_ONCHANGE', 
            payload: {property: property}
        })
    }

    function handleSubmit(event){
        event.preventDefault();

        axios.put(`/api/item/${editItem.id}`, editItem)
            .then(response => {
                dispatch({type})
            })
    }

    return(
        <>
        <ThemeProvider theme={theme}>
        <h1>Edit Page</h1>

        <form>
            {/* item name */}
            <div>
                <label htmlFor="itemName">
                Item:
                <TextField
                    type="text"
                    name="itemName"
                    value={editItem.itemName}
                    onChange={(event) => handleChange(event.target.value)}
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
                    value={editItem.itemImage}
                    onChange={(event) => handleChange(event.target.value)}
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
                    value={editItem.itemDescription}
                    onChange={(event) => handleChange(event.target.value)}
                />
                </label>
            </div>
        </form>

        <Button variant="contained" color="primary" onClick={() => {history.push('/profile');}}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>Save</Button>

        </ThemeProvider>
        </>
    )
}

export default EditPage;