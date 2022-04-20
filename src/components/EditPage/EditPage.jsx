import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function EditPage (){

    const history = useHistory();
    const editItem = useSelector((store) => store.editItem);
    const dispatch = useDispatch;

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
        <h1>Edit Page</h1>

        <form>
            {/* item name */}
            <div>
                <label htmlFor="itemName">
                Item:
                <input
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
                <input
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
                <input
                    type="text"
                    name="itemDescription"
                    value={editItem.itemDescription}
                    onChange={(event) => handleChange(event.target.value)}
                />
                </label>
            </div>
        </form>

        <button onClick={() => {history.push('/profile');}}>Cancel</button>
        <button onClick={handleSubmit}>Save</button>
        </>
    )
}

export default EditPage;