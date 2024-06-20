import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


interface PageHeaderProps {
    title: string;
    onBack: () => void;
}

function PageHeader(props: PageHeaderProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <TouchableOpacity onPress={props.onBack}>
                <Text style={styles.backButton}>{'Back'}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 50,
        backgroundColor: '#333',
    },

    title: {
        color: '#fff',
        fontSize: 20,
    },

    backButton: {
        color: '#fff',
    }
});

export default PageHeader;