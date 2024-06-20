import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';
import PageHeader from '../components/PageHeader';

type DocumentsPageProps = {
    onBack: () => void;
}

function DocumentsPage(props: DocumentsPageProps) {
    return (
        <View style={styles.container}>
            <PageHeader title='Documents' onBack={props.onBack} />

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

export default DocumentsPage;