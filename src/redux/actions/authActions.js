import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

export const login = (email, password) => {
    return async (dispatch) => {
        dispatch({ type: 'LOGIN_REQUEST' });

        try {
            console.log("Sending login request...");
            const response = await axios.post(
                'https://api-yeshtery.dev.meetusvr.com/v1/yeshtery/token',
                {
                    email,
                    password,
                    isEmployee: true,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log("Login successful:", response.data);

            const token = response.data.token;

            await AsyncStorage.setItem('token', token);

            dispatch({ type: 'LOGIN_SUCCESS', payload: token });

            dispatch(fetchUserInfo(token));

        } catch (error) {

            console.error("Login failed:", error.message);

            Toast.show({
                type: 'error',
                text1: 'Login Failed',
                text2: error.message || 'Something went wrong. Please try again.',
            });

            dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
        }
    };
};

export const fetchUserInfo = (token) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(
                'https://api-yeshtery.dev.meetusvr.com/v1/user/info',
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const { id, name } = response.data;

            dispatch({ type: 'SET_USER_INFO', payload: { userId: id, name } });
        } catch (error) {
            dispatch({ type: 'LOGIN_FAILURE', payload: error.message });
        }
    };
};

export const logout = () => {
    return async (dispatch) => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'LOGOUT' });
    };
};