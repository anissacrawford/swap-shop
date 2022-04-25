const pendingOffer = (state = [], action) => {
    switch (action.type) {
        case 'SET_OFFER_ID':
            return action.payload;
        default:
            return state;
    }
}

export default pendingOffer;

