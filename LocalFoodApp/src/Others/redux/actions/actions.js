import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, LOAD_CART, LOAD_UID, ADD_ID_SHOP, PODUCT_QUANTITY, SET_NEW_CART } from './types';

export const loaduid = (Item) =>{
    return{
        type: LOAD_UID,
        payload: Item
    }
};

export const loadCart = (Item) =>{
    return{
        type: LOAD_CART,
        payload: Item
    }
};


export const addToCart = (Item) =>{
    return{
        type: ADD_TO_CART,
        payload: Item
    }
};

export const removeFromCart = (Item) =>{
    return{
        type: REMOVE_FROM_CART,
        payload: Item
    }
};

export const clearCart = () =>{
    return{
        type: CLEAR_CART,
        payload: []
    }
};

export const addIdShop = (id) => {
    return {
        type: ADD_ID_SHOP,
        payload: id
    }   
}

export const ProductQuantity = (name, type) =>{
    return {
        type: PODUCT_QUANTITY,
        payload: {name: name, type: type}
    }
}

export const setNewCart = (newCart) =>{
    return {
        type: SET_NEW_CART,
        payload: newCart
    }
}