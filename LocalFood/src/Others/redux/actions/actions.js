import { LOGIN, LOGOUT, ADD_TO_CART, REMOVE_FROM_CART } from './types';

export const login = (login) =>{
    dispatch({
        type: LOGIN,
        payload: login
    })
};

export const logout = () =>{
    dispatch({
        type: LOGOUT,
        payload: ""
    })
};

export const addToCart = (Item) =>{
    dispatch({
        type: ADD_TO_CART,
        payload: Item
    })
};

export const removeFromCart = (Item) =>{
    dispatch({
        type: REMOVE_FROM_CART,
        payload: Item
    })
};
