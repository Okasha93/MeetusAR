import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import { useSelector } from 'react-redux';

const Stack = createStackNavigator();

const AppNavigator = () => {
    const token = useSelector((state) => state.auth.token);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {token ? (
                    <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
                ) : (
                    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
