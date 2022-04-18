import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function AddItemPage(){

    const [itemName, setItemName] = useState('');
    const [itemImage, setItemImage] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const addItem = (event) => {
        event.preventDefault();

        dispatch({
            type: 'ADD_ITEM',
            payload: {
                itemName: itemName,
                itemImage: itemImage,
                itemDescription: itemDescription
            },
        });
    }; //end addItem

    return(
        
            <form onSubmit={addItem}>

                <h2>Add Item:</h2>

                {/* item name */}
                <div>
                    <label htmlFor="itemName">
                    Item:
                    <input
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
                    <input
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
                    <input
                        type="text"
                        name="itemDescription"
                        value={itemDescription}
                        required
                        onChange={(event) => setItemDescription(event.target.value)}
                    />
                    </label>
                </div>

                <button onClick={() => {history.push('/profile');}}>Cancel</button>
                <button onClick={() => {history.push('/profile');}}>Add Item</button>

            </form>
        
    )
}

export default AddItemPage;