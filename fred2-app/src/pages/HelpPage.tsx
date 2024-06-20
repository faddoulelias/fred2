import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import PageHeader from '../components/PageHeader';

type HelpPageProps = {
    onBack: () => void;
}

function HelpPage(props: HelpPageProps) {
    return (
        <View style={styles.container}>
            <PageHeader title='Help' onBack={props.onBack} />

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

export default HelpPage;