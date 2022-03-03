import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART, LOAD_CART, LOAD_UID, ADD_ID_SHOP, TOTAL_PRICE_OF_PRODUCT } from './types';

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

export const IPPIC = (productName, quantity) =>{
    return {
        type: TOTAL_PRICE_OF_PRODUCT,
        payload: {productName: productName, quantity: quantity}
    }
}