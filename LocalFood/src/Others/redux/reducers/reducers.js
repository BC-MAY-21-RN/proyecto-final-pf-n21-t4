import { LOGIN, LOGOUT, ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types'

const initialState = {
    user: '',
    cart: []
}

const LocalFoodReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN:
            return {...state, user: action.payload};
        case LOGOUT:
            return {...state, user: action.payload};
        case ADD_TO_CART:
            return {...state, cart: state.cart.push(action.payload)};
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.pop()};
    }
}

export default LocalFoodReducer;