import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from '../Others/redux/actions/actions.js';

export const TestScreen = () => {
    const { user } = useSelector(state => state.LocalFoodReducer)
    const dispatch = useDispatch();

    return (
        <View>
            <Text>Hello World {user}</Text>
            <TouchableOpacity onPress={()=>{
                dispatch(logout())
            }}>
                <Text>Touch me to ad an add user.</Text>
            </TouchableOpacity>
        </View>
    );
};
