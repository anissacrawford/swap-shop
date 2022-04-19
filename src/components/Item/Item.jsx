import { useHistory } from 'react-router-dom';
import { useDispatch} from 'react-redux';

function Item (props){

    const history = useHistory();
    const dispatch = useDispatch();

    const handleClick = () => {
        history.push(`/edit/${props.item.id}`);
    }

    return (
    <ul>
        <li>{props.anItem.username}</li>
        <li>{props.anItem.item_image}</li>
        <li>{props.anItem.item_name}</li>
        <li>{props.anItem.item_description}</li>
        <button onClick={handleClick}>edit</button>
        <button onClick={(event) => dispatch({ type:'DELETE_ITEM', payload: props.anItem.id})}>delete</button>
    </ul>
   
    )
}

export default Item;