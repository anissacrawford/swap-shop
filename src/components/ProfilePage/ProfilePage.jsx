import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { useHistory } from 'react-router-dom';


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

        <div>
        <h2>My items</h2>
        {/* {item.map((anItem) => {
            console.log(anItem);
            return(
                <ul key={anItem.id}>
                    <li>{anItem.username}</li>
                    <li>{anItem.item_image}</li>
                    <li>{anItem.item_name}</li>
                    <li>{anItem.item_description}</li>
                    <button>edit</button>
                    <button>delete</button>
                </ul>
               
            )
        })} */}
            <button onClick={() => {history.push('/additem');}}>add item</button>
        </div>
        
        </>
    )
}

export default ProfilePage;