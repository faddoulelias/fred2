import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutUsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Us</Text>
            <Text style={styles.description}>
                This is the About Us screen. Here you can provide information about your application, your team, and your mission.
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
    },
});

export default AboutUsScreen;