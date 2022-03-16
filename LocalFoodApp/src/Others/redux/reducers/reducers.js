import {  ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, LOAD_CART, LOAD_UID, ADD_ID_SHOP, PODUCT_QUANTITY, SET_NEW_CART} from '../actions/types'

const initialState = {
    uid: '',
    cart: [],
    idShop: '',
    editableProduct: '',
    activeOrders: '',
    userOrders: '',

}

const LocalFoodReducer = (state = initialState, action) => {
    switch(action.type){
        case LOAD_UID:
            return {...state, uid: action.payload}
        case LOAD_CART:
            return {...state, cart: action.payload}
        case ADD_TO_CART:
            return {...state, cart: [...state.cart, action.payload]};            
        case REMOVE_FROM_CART:
            return {...state, cart: state.cart.pop()};
        case CLEAR_CART:
            return {...state, cart: action.payload}
        case ADD_ID_SHOP:
            return {...state, idShop: action.payload}
        case PODUCT_QUANTITY:
            const newState = state
            newState.cart.map(item => {
                if(item.Name == action.payload.name)
                {
                    if(action.payload.type=='+')
                        item.quantity++;
                    else
                        if(item.quantity>0)
                            item.quantity--;
                }
            })
            return newState
        case SET_NEW_CART: 
            return {...state, cart: action.payload}
        default:
        return state
    }
}

export default LocalFoodReducer;