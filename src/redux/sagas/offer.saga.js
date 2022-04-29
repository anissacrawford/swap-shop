import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

//post new offers to DB 
function* postOffer(action) {
    try {
        const offerId = yield axios.post('/api/offer', action.payload);
        yield put({ type: 'SET_OFFER_ID', payload: offerId.data })
    } catch (err) {
        console.log(err);
    }
}

//get offers 
function* getOffer(action) {
    try {
        const getOffer = yield axios.get('/api/offer', action.payload)
        yield put({ type: 'SET_OFFER_ITEM_A', payload: getOffer.data[0] })
        yield put({ type: 'SET_OFFER_ITEM_B', payload: getOffer.data[0] })
    } catch (err) {
        console.log(err);
    }
}

//get offers (incoming swaps)
function* getIncomingSwap(action) {
    try {
        const incomingSwap = yield axios.get('/api/offer/incomingSwap', action.payload)
        yield put ({type: 'SET_INCOMING_SWAP', payload: incomingSwap.data})
    } catch(err) {
        console.log(err);
    }
}

//update offers in DB 
function* updateOffer(action) {
    try {
        yield axios.put(`/api/offer/${action.payload.id}`, action.payload);
        yield put({ type: 'GET_OFFER', payload: action.payload.offer_id });
    } catch (err) {
        console.log(err);
    }
}

//switches user in item table for item A 
function* putOfferA(action) {
    try {
        yield axios.put('/api/offer/itemA', action.payload);
        yield put({ type: 'GET_OFFER', payload: action.payload});
    } catch (err) {
        console.log(err);
    }
}

//switches user in item table for item B 
function* putOfferB(action) {
    try {
        yield axios.put('/api/offer/itemB', action.payload);
        yield put({ type: 'GET_OFFER', payload: action.payload});
    } catch (err) {
        console.log(err);
    }
}

//deletes offer from offer table 
function* deleteOffer(action) {
    try {
        yield axios.delete(`/api/offer/${action.payload}`)
        yield put({ type: 'GET_OFFER', payload: action.payload});
    } catch (err) {
        console.log(err);
    }
}

// combines functions 
function* offerSaga() {
    yield takeLatest('POST_OFFER', postOffer);
    yield takeLatest('GET_OFFER', getOffer);
    yield takeLatest('GET_INCOMING_SWAP', getIncomingSwap);
    yield takeLatest('UPDATE_OFFER', updateOffer);
    yield takeLatest('PUT_OFFER_A', putOfferA);
    yield takeLatest('PUT_OFFER_B', putOfferB);
    yield takeLatest('DELETE_OFFER', deleteOffer);
}

export default offerSaga;   
