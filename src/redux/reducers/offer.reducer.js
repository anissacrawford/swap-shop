const offer = (state = {}, action) => {
    if (action.type == 'CLEAR_OFFER') {
        return {};
    } else if (action.type == 'SET_OFFER_ITEM_A') {
        return {
            itemA: action.payload
        }
    } else if (action.type == 'SET_OFFER_ITEM_B') {
        return {
            ...state,
            itemB: action.payload
        }
    } else if (action.type == 'OFFER_ONCHANGE') {
        return {
            ...state,
            [action.payload.property]: action.payload.value
        }
    }
    return state;
}

export default offer;