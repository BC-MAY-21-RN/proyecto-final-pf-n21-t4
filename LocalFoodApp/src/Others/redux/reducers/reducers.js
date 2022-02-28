import {  ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, LOAD_CART, LOAD_UID} from '../actions/types'

const initialState = {
    uid: '',
    cart: ['a'],
}

const LocalFoodReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_UID:
            return {...state, uid: action.payload}
        case LOAD_CART:
            return {...state, cart: action.payload}
        case ADD_TO_CART:
            return {...state, cart: state.cart.push(action.payload)};
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.pop()};
        case CLEAR_CART:
            return {...state, cart: action.payload}
        default:
            return state
    }
}

export default LocalFoodReducer;