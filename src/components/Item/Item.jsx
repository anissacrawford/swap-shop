import {useSelector } from 'react-redux';

function Item (){

    const item = useSelector(store => store.item);

    return (
        <>
             {item.map((anItem) => {
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
        })}
        </>
    )
}

export default Item;