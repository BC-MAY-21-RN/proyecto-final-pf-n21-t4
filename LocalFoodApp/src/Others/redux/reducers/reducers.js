import {  ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, LOAD_CART, LOAD_UID, ADD_ID_SHOP} from '../actions/types'

const initialState = {
    uid: '',
    cart: [],
    idShop: ''
}

const LocalFoodReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_UID:
            return {...state, uid: action.payload}
        case LOAD_CART:
            return {...state, cart: action.payload}
        case ADD_TO_CART:
            console.log(action.payload)
            return {...state, cart: [...state.cart, action.payload]};            
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.pop()};
        case CLEAR_CART:
            return {...state, cart: action.payload}
        case ADD_ID_SHOP:
            return {...state, idShop: action.payload}
        default:
            return state
    }
}

export default LocalFoodReducer;