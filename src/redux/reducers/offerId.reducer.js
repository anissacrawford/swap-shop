const offerId = (state = [], action) => {
    switch (action.type) {
        case 'SET_OFFER_ID':
            return action.payload;
        default:
            return state;
    }
}

export default offerId;

