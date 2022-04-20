import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux';

function Item({anItem}) {

    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({type: 'SET_EDIT_ITEM', payload: anItem})
        history.push(`/edit/${anItem.id}`);
    }

    return (
        <ul>
            <li>{anItem.username}</li>
            <li>{anItem.item_image}</li>
            <li>{anItem.item_name}</li>
            <li>{anItem.item_description}</li>
            <button onClick={handleClick}>edit</button>
            <button onClick={(event) => dispatch({ type:'DELETE_ITEM', payload: anItem.id})}>delete</button>
        </ul>
    )
}

export default Item;