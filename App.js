import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import store from './src/redux/store';
import AppNavigator from './src/navigation/AppNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fetchUserInfo } from './src/redux/actions/authActions';

const App = () => {
  return (
    <Provider store={store}>
      <Bootstrap />
    </Provider>
  );
};

const Bootstrap = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        dispatch({ type: 'LOGIN_SUCCESS', payload: token });
        dispatch(fetchUserInfo(token));
      }
    };

    checkToken();
  }, []);

  return <AppNavigator />;
};

export default App;
