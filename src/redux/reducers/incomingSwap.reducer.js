const incomingSwap = (state = [], action) => {
    switch (action.type) {
        case 'SET_INCOMING_SWAP':
            return action.payload;
        default:
            return state;
    }
}

export default incomingSwap;