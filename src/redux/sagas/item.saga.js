import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//get all profile items from the DB 
function* getProfileItems (){
    try {
        const item = yield axios.get('/api/item/getProfile');
        yield put({ type: 'SET_ITEM', payload: item.data});
    } catch (err){
        console.log('get all error', err);
    }   
}

//get all shop items from the DB 
function* getShopItems (){
    try {
        const item = yield axios.get('/api/item/getShop');
        yield put({ type: 'SET_ITEM', payload: item.data});
    } catch (err){
        console.log('get all error', err);
    }   
}


//post new items to DB 
function* postNewItems(action) {
    try{
        yield axios.post('/api/item', action.payload);
        yield put({type: 'GET_ITEM'})
    } catch(err) {
        console.log(err);   
    }
}

//update items in DB 
//hold edit 
function* editItems(action) {
    try {
        const getItem = yield axios.get(`/api/item/${action.payload}`)
        yield put({ type: 'SET_EDIT_ITEM', payload: getItem.data[0]})
    } catch(err) {
        console.log(err);
    }
}

//update items in DB 
//send edit
function* updateItems (action) {
    try{
        yield axios.put(`/api/item/${action.payload.id}`, action.payload);
        yield put({type: 'GET_EDIT_ITEM', payload: action.payload.item_id})
    } catch(err){
        console.log(err);
    }
}

//delete items from DB 
function* deleteItems(action) {
    try{
        yield axios.delete(`/api/item/${action.payload.id}`)
        yield put({ type: 'GET_PROFILE_ITEM'})
    } catch(err) {
        console.log(err);
    }
  }

//combines CRUD functions 
function* itemSaga() {
    yield takeLatest('GET_PROFILE_ITEM', getProfileItems);
    yield takeLatest('GET_SHOP_ITEM', getShopItems);
    yield takeLatest('POST_ITEM', postNewItems);
    yield takeLatest ('EDIT_ITEM', editItems);
    yield takeLatest ('UPDATE_ITEM', updateItems);
    yield takeLatest('DELETE_ITEM', deleteItems);
}

export default itemSaga; 