import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ListarObras = ({ navigation }) => {
    const obras = [
        { id: 1, titulo: 'Obra 1', status: 'nao-iniciada', imagem: require('../assets/muro_azul.png') },
        { id: 2, titulo: 'Obra 2', status: 'em-andamento', imagem: require('../assets/muro_azul.png') },
    ];

    return (
        <ScrollView style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.logo}>
                    <Image source={require('../assets/muro_azul.png')} style={styles.logoImage} />
                    <Text style={styles.logoText}>Diário de Obras</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('CadastrarObra')}>
                    <Image source={require('../assets/muro_azul.png')} style={styles.addIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.board}>
                {['nao-iniciada', 'em-andamento', 'concluida', 'paralisada'].map((status) => (
                    <View key={status} style={styles.column}>
                        <Text style={styles.columnTitle}>{status}</Text>
                        {obras
                            .filter((obra) => obra.status === status)
                            .map((obra) => (
                                <View key={obra.id} style={styles.card}>
                                    <Image source={obra.imagem} style={styles.cardImage} />
                                    <Text style={styles.cardTitle}>{obra.titulo}</Text>
                                    <TouchableOpacity onPress={() => navigation.navigate('EditarObra', { id: obra.id })}>
                                        <Image source={require('../assets/muro_azul.png')} style={styles.icon} />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('ExcluirObra', { id: obra.id })}>
                                        <Image source={require('../assets/muro_azul.png')} style={styles.icon} />
                                    </TouchableOpacity>
                                </View>
                            ))}
                    </View>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
    },
    navbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#191970',
    },
    logo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logoImage: {
        width: 50,
        height: 50,
    },
    logoText: {
        color: '#fff',
        fontSize: 20,
        marginLeft: 10,
    },
    addIcon: {
        width: 30,
        height: 30,
    },
    board: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 20,
    },
    column: {
        width: '23%',
        backgroundColor: '#f4f4f4',
        borderRadius: 5,
        padding: 10,
    },
    columnTitle: {
        textAlign: 'center',
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#e3e3e3',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    cardImage: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        width: 20,
        height: 20,
    },
});

export default ListarObras;