import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { useHistory } from 'react-router-dom';


function ShopPage (){

    const dispatch = useDispatch();
    const item = useSelector(store => store.item);
    const history = useHistory();

    useEffect(() => {
        // dispatch to get all items to display on the DOM
        dispatch({ type: 'GET_ITEM' });
    }, []);

    return (

       <>
        {/* if user id equals item id show on profile  */}

        <div>
        <h2>The Shop</h2>
        {item?.map((anItem) => {
            console.log(anItem);
            return(
                <ul key={anItem.id}>
                    <li>{anItem.username}</li>
                    <li>{anItem.item_image}</li>
                    <li>{anItem.item_name}</li>
                    <li>{anItem.item_description}</li>
                </ul>
               
            )
        })}
            <button onClick={() => {history.push('/swap');}}>swap?</button>
        </div>
       </>

    )
}

export default ShopPage;