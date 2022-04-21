import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// update offers in DB 
// hold offer 
function* holdOffer(action) {
    try {
        console.log(`in edit item saga, ${action.payload}`);
        const getOffer = yield axios.get(`/api/offer/${action.payload}`)
        yield put({ type: 'SET_OFFER_ITEM', payload: getOffer.data[0]})
    } catch(err) {
        console.log(err);
    }
}

//update offers in DB 
//update offer
function* updateOffer(action) {
    try{
        console.log('BEEP', action.payload);
        yield axios.put(`/api/offer/${action.payload.id}`, action.payload);
        yield put({type: 'GET_OFFER_ITEM_A', payload: action.payload.offer_id})
        yield put({type: 'GET_OFFER_ITEM_B', payload: action.payload.offer_id})
    } catch(err){
        console.log(err);
    }
}

// combines functions 
function* offerSaga() {
    yield takeLatest('GET_PROFILE_ITEM', holdOffer);
    yield takeLatest('GET_SHOP_ITEM', updateOffer);
}

export default offerSaga; 
