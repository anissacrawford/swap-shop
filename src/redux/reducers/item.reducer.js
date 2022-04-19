const item = (state = [], action) => {
    switch (action.type) {
        case 'SET_ITEM':
            return action.payload;
        default:
            return state;
    }
}

export default item

