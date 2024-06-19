import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const QAScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Q&A Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default QAScreen;