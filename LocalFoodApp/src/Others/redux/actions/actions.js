import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, LOAD_CART, LOAD_UID, ADD_ID_SHOP } from './types';

export const loadCart = (Item) =>{
    return{
        type: LOAD_CART,
        payload: Item
    }
};

export const loaduid = (Item) =>{
    return{
        type: LOAD_UID,
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
        type: REMOVE_FROM_CART,
        payload: []
    }
};

export const addIdShop = (id) => {
    return {
        type: ADD_ID_SHOP,
        payload: id
    }   
}