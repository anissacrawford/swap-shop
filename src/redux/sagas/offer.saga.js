import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


//post new offers to DB 
function* postOffer(action) {
    try{
        console.log('in post offer saga', action.payload);
        const offerId = yield axios.post('/api/offer', action.payload);
        yield put ({type: 'SET_OFFER_ID', payload: offerId.data})
    } catch(err) {
        console.log(err);   
    }
}

// update offers in DB 
function* holdOffer(action) {
    try {
        console.log(`in hold offer saga, ${action.payload}`);
        const getOffer = yield axios.get('/api/offer', action.payload)
        yield put({ type: 'SET_OFFER_ITEM_A', payload: getOffer.data[0]})
        yield put({ type: 'SET_OFFER_ITEM_B', payload: getOffer.data[0]})
    } catch(err) {
        console.log(err);
    }
}

//update offers in DB 
function* updateOffer(action) {
    try{
        console.log('in update offer saga', action.payload);
        yield axios.put(`/api/offer/${action.payload.id}`, action.payload);
        yield put({type: 'GET_OFFER', payload: action.payload.offer_id});
    } catch(err){
        console.log(err);
    }
}

//switches offer in offer table 
function* putOffer(action){
    try{
        console.log('in put offer saga', action.payload);
        yield axios.put('/api/offer', action.payload);
        yield put({type: 'GET_OFFER', payload: action.payload.offer_id});

    } catch(err){
        console.log(err);
    }
}

// combines functions 
function* offerSaga() {
    yield takeLatest('POST_OFFER', postOffer);
    yield takeLatest('GET_OFFER', holdOffer);
    yield takeLatest('UPDATE_OFFER', updateOffer);
    yield takeLatest('PUT_OFFER', putOffer);
    // yield takeLatest('GET_OFFER_GET', getOffer);
}

export default offerSaga; 
