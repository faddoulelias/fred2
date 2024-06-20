import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import PageHeader from '../components/PageHeader';

type MapPageProps = {
    onBack: () => void;
}

function MapPage(props: MapPageProps) {
    return (
        <View style={styles.container}>
            <PageHeader title='Map' onBack={props.onBack} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
});

export default MapPage;