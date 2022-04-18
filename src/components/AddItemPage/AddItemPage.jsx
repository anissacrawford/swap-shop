import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddItemPage(){

    const [itemName, setItemName] = useState('');
    const [itemImage, setItemImage] = useState('');
    const [itemDescription, addItemDescription] = useState('');
    const dispatch = useDispatch();

    dispatch({
        type: 'ADD_ITEM',
        payload: {
          itemName = itemName,
          itemImage = itemImage,
          itemDescription = itemDescription
        },
      });
    };

    return(
        <>
            <form onSubmit={addItem}>
                <div>
                    {/* <label htmlFor="username">
                    Username:
                    <input
                        type="text"
                        name="username"
                        value={username}
                        required
                        onChange={(event) => setUsername(event.target.value)}
                    />
                    </label> */}
                </div>
            </form>
        </>
    )
}

export default AddItemPage;