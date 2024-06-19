import React from 'react';

import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { useNavigation } from '@react-navigation/native';
import { StackNavigation } from '../components/Navigation';

import { Camera } from 'expo-camera';

const HomeScreen = () => {
    const navigation = useNavigation<StackNavigation>();

    const openCamera = async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        if (status === 'granted') {
            navigation.navigate('Camera');
        } else {
            alert('Camera permission is required to use the camera');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <ImageBackground source={require('../../assets/vers.png')} style={styles.imageBackground}>
                    <TouchableOpacity style={styles.cameraButton} onPress={openCamera}>
                        <Icon name="camera-alt" size={50} color="#fff" />
                    </TouchableOpacity>
                </ImageBackground>
            </View>
            <View style={styles.bottomSection}>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Chat')}>
                    <Icon name="chat" size={50} color="#000" />
                    <Text style={styles.iconText}>Chat</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('Q&A')}>
                    <Icon name="question-answer" size={50} color="#000" />
                    <Text style={styles.iconText}>Q&A</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate('AboutUs')}>
                    <Icon name="info" size={50} color="#000" />
                    <Text style={styles.iconText}>About Us</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topSection: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cameraButton: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 50,
        padding: 10,
    },
    bottomSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconText: {
        marginTop: 5,
        fontSize: 18,
    },
});

export default HomeScreen;