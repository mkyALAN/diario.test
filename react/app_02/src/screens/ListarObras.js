import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import api from "../config/api";

const ListarObras = ({ navigation }) => {
    const [obras, setObras] = useState([]);

    const getObras = async () => {
        await api.get('/obras')
            .then((response) => {
                setObras(response.data);
            })
            .catch(() => {
                console.log("Erro ao carregar obras");
            });
    };

    useEffect(() => {
        getObras();
    }, []);

    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <Image source={item.imagem} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{item.titulo}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EditarObra', { id: item.id })}>
                <Image source={require('../assets/muro_branco.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ExcluirObra', { id: item.id })}>
                <Image source={require('../assets/muro_branco.png')} style={styles.icon} />
            </TouchableOpacity>
        </View>
    );

    return (
        <ScrollView style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.logo}>
                    <Image source={require('../assets/muro_branco.png')} style={styles.logoImage} />
                    <Text style={styles.logoText}>Diário de Obras</Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('CadastrarObra')}>
                    <Image source={require('../assets/muro_branco.png')} style={styles.addIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.board}>
                {['nao-iniciada', 'em-andamento', 'concluida', 'paralisada'].map((status) => (
                    <View key={status} style={styles.column}>
                        <Text style={styles.columnTitle}>{status}</Text>
                        <FlatList
                            data={obras.filter((obra) => obra.status === status)}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                        />
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