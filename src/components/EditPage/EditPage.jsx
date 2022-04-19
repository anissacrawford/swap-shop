import { useHistory } from 'react-router-dom';

function EditPage (){

    const history = useHistory();

    return(
        <>
        <h1>Edit Page</h1>
        <input/>
        <input/>
        <input/>
        <button onClick={() => {history.push('/profile');}}>Cancel</button>
        <button>Save</button>
        </>
    )
}

export default EditPage;