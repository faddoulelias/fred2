import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import PageHeader from '../components/PageHeader';
import MonumentAudio from '../components/MonumentAudio';
import { Monument, monumentsList } from '../constants/Monuments';

type VisitPageProps = {
    onBack: () => void;
}


function VisitPage(props: VisitPageProps) {
    const monuments: Monument[] = monumentsList;
    return (
        <View style={styles.container}>
            <PageHeader title='Visit' onBack={props.onBack} />
            <ScrollView style={styles.audiosContainer}>
                {monuments.map((monument, index) => (
                    <MonumentAudio key={index} name={monument.name} iconName={monument.iconName} audio={monument.audio} />
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },
    audiosContainer: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#f0f0f0',
    },
    audioPlayer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    },
});

export default VisitPage;