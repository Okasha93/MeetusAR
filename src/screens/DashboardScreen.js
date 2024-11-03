import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { logout } from '../redux/actions/authActions';

const DashboardScreen = () => {
    const { userId, name } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    return (
        <LinearGradient colors={['#f0e9ff', '#d4b7ff']} style={styles.background}>
            <View style={styles.container}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />

                <Text style={styles.text}>User ID: {userId}</Text>
                <Text style={styles.text}>Name: {name}</Text>

                <TouchableOpacity style={styles.button} onPress={() => dispatch(logout())}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 250,
        height: 120,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        color: '#4A148C',
        marginVertical: 10,
    },
    button: {
        width: '65%',
        backgroundColor: '#9414FF',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default DashboardScreen;
