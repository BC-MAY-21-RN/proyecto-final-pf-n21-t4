import { LOGIN, LOGOUT, ADD_TO_CART, REMOVE_FROM_CART, CREDENTIALS } from './types';

export const login = (login) =>{
    return{
        type: LOGIN,
        payload: login
    }
};

export const logout = () =>{
    return{
        type: LOGOUT,
        payload: ""
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

export const addCredentials = (email, name, password, phonenumber, direction) =>{
    return{
        type: CREDENTIALS,
        payload: {email, name, password, phonenumber, direction}
    }
};