import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Item from '../Item/Item';


function ProfilePage (){

    const dispatch = useDispatch();
    const item = useSelector(store => store.item);
    const history = useHistory();

    useEffect(() => {
        // dispatch to get all items to display on the DOM
        dispatch({ type: 'GET_ITEM' });
    }, []);

    return (
        <>
        <h1>Profile Page </h1>
        <h2>Welcome, *username* </h2>

        <h2>My items</h2>

        <div>
            {item?.map((anItem) => {
                return(
                    <Item key={anItem.id} anItem={anItem} />
                    
                )})}
                
            <button onClick={() => {history.push('/additem');}}>add item</button>
        </div>
        
        </>
    )
}

export default ProfilePage;