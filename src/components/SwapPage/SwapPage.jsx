import { useHistory } from 'react-router-dom';

function SwapPage (){
    
    const history = useHistory();

    return (
        <>
        <h1>Swap Page</h1>
        <h2>For Your...</h2>
        <h3>Item image</h3>
        <h3>Item name</h3>
        <h3>Item description</h3>
        <h2>I will trade...</h2>
        <h3>dropdown</h3>
        <h3>Item image</h3>
        <h3>Item name</h3>
        <h3>Item description</h3>

        <button onClick={() => {history.push('/shop');}}>Cancel</button>
        <button>Confirm</button>
        </>
    )
}

export default SwapPage;