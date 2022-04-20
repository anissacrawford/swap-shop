import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import Item from '../Item/Item';

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
            return(
               <Item key={anItem.id} anItem={anItem}/>
            )
        })}
            <button onClick={() => {history.push('/swap');}}>swap?</button>
        </div>
       </>

    )
}

export default ShopPage;