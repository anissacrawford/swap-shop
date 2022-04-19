import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//get all items from the DB 
function* getNewItems (){
    try {
        // console.log('in get item saga', item.data);
        const item = yield axios.get('/api/item');
        yield put({ type: 'SET_ITEM', payload: item.data });

    } catch (err){
        console.log('get all error', err);
    }   
}

//post new items to DB 
function* postNewItems(action) {
    try{
        // console.log('in post item saga', action.payload);
        yield axios.post('/api/item', action.payload);
        yield put({type: 'GET_ITEM'})
    } catch(err) {
        console.log(err);   
    }
}

//update items in DB 


//delete items from DB 
function* deleteItems(action) {
    try {
          console.log(`in delete item saga, ${action.payload}`);
          yield axios.delete(`/api/item/${action.payload}`)
          yield put({ type: 'GET_ITEM'})
      } catch(err) {
          console.log(err);
      }
  }

//combines CRUD functions 
function* itemSaga() {
    yield takeLatest('GET_ITEM', getNewItems);
    yield takeLatest('POST_ITEM', postNewItems);
    // yield takeLatest ('UPDATE_ITEM', updateItems);
    yield takeLatest('DELETE_ITEM', deleteItems);
}

export default itemSaga; 