import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import Item from '../Item/Item';


function ProfilePage (){

    const dispatch = useDispatch();
    const item = useSelector(store => store.item);

    useEffect(() => {
        // dispatch to get all items to display on the DOM
        dispatch({ type: 'GET_ITEM' });
    }, []);

    return (
        <>
        <h1>Profile Page </h1>
        <h2>Username </h2>
        
        <button>add item</button>

        <div>
        <h2>My items</h2>
            <Item/>
        </div>
        
        </>
    )
}

export default ProfilePage;