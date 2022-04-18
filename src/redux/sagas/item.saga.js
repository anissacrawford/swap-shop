import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//get all items from the DB 
function* getNewItems (){
    
    try {
        const item = yield axios.get('/api/item');
        console.log('get all:', item.data);
        yield put({ type: 'SET_ITEM', payload: item.data });

    } catch (err){
        console.log('get all error', err);
    }   
}

function* getItems() {
    yield takeLatest('GET_ITEM', getNewItems);
}

export default getItems; 