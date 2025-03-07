import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [messages, setMessages] = useState([]);

    const handleLogin = () => {
        console.log('Usuário:', username);
        console.log('Senha:', password);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../assets/logo_branca.png')}
                style={styles.logo}
            />
            <View style={styles.content}>
                <Text style={styles.title}>LOGIN</Text>
                {messages.length > 0 && (
                    <View style={styles.messages}>
                        {messages.map((message, index) => (
                            <Text key={index} style={styles.error}>{message}</Text>
                        ))}
                    </View>
                )}
                <TextInput
                    style={styles.input}
                    placeholder="Usuário"
                    value={username}
                    onChangeText={setUsername}
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                />
                <TouchableOpacity style={styles.checkboxContainer} onPress={togglePasswordVisibility}>
                    <View style={[styles.checkbox, showPassword && styles.checkboxChecked]} />
                    <Text style={styles.checkboxLabel}>Mostrar Senha</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0f4c',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20,
    },
    content: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '100%',
        maxWidth: 400,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 20,
        color: '#0f0f4c',
    },
    input: {
        width: '100%',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#0f0f4c',
        borderRadius: 3,
        marginRight: 10,
    },
    checkboxChecked: {
        backgroundColor: '#0f0f4c',
    },
    checkboxLabel: {
        color: '#0f0f4c',
    },
    button: {
        backgroundColor: '#0f0f4c',
        padding: 15,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    messages: {
        marginBottom: 10,
    },
    error: {
        color: 'red',
        textAlign: 'center',
    },
});

export default LoginScreen;