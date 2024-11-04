import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { LinearGradient } from 'expo-linear-gradient';
import { login } from '../redux/actions/authActions';
import Toast from 'react-native-toast-message';

const { width } = Dimensions.get('window');

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleEmailChange = (text) => {
        setEmail(text);
        if (!text) {
            setEmailError('Email is required');
        } else if (!validateEmail(text)) {
            setEmailError('Please enter a valid email address');
        } else {
            setEmailError('');
        }
    };

    const handlePasswordChange = (text) => {
        setPassword(text);
        if (!text) {
            setPasswordError('Password is required');
        } else {
            setPasswordError('');
        }
    };

    const handleLogin = () => {
        if (!emailError && !passwordError && email && password) {
            dispatch(login(email, password));
        }
    };

    const isLoginButtonDisabled = !email || !password || emailError !== '' || passwordError !== '';

    return (
        <LinearGradient colors={['#f0e9ff', '#d4b7ff']} style={styles.background}>
            <View style={styles.container}>
                <Image source={require('../../assets/logo.png')} style={styles.logo} />

                <Text style={styles.welcomeText}>Welcome back</Text>
                <Text style={styles.subtitle}>
                    Step into our shopping metaverse for an unforgettable shopping experience
                </Text>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        placeholderTextColor="#B0B0B0"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={handleEmailChange}
                    />
                </View>
                {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        placeholderTextColor="#B0B0B0"
                        secureTextEntry
                        value={password}
                        onChangeText={handlePasswordChange}
                    />
                </View>
                {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

                <TouchableOpacity
                    style={[styles.button, isLoginButtonDisabled && styles.disabledButton]}
                    onPress={handleLogin}
                    disabled={isLoginButtonDisabled}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>

                <Text style={styles.signupText}>
                    Don’t have an account? <Text style={styles.signupLink}>Sign up</Text>
                </Text>
            </View>
            <Toast />
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
        width: width * 0.6,
        height: width * 0.3,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    welcomeText: {
        fontSize: width * 0.07,
        fontWeight: 'bold',
        color: '#1A1A1E',
        marginBottom: 5,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: width * 0.04,
        color: '#5C5C5C',
        textAlign: 'center',
        marginBottom: 30,
        paddingHorizontal: 10,
    },
    inputContainer: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        marginTop: 15,
    },
    input: {
        flex: 1,
        paddingVertical: 12,
        fontSize: 16,
        color: '#000',
    },
    errorText: {
        color: 'red',
        fontSize: 14,
        textAlign: 'left',
        alignSelf: 'stretch',
        marginLeft: 15,
        marginBottom: 10,
    },
    button: {
        width: '100%',
        backgroundColor: '#9414FF',
        borderRadius: 10,
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: 20,
    },
    disabledButton: {
        backgroundColor: '#B0B0B0',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: width * 0.045,
        fontWeight: 'bold',
    },
    signupText: {
        fontSize: 14,
        color: '#5C5C5C',
        marginTop: 15,
    },
    signupLink: {
        color: '#6A0DAD',
        fontWeight: 'bold',
    },
});

export default LoginScreen;
