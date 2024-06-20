import { StyleSheet, View, ScrollView } from 'react-native';
import React from 'react';
import PageHeader from '../components/PageHeader';
import MonumentAudio from '../components/MonumentAudio';

type VisitPageProps = {
    onBack: () => void;
}

type Monuments = {
    name: string;
    iconName: string;
    audioPath: string;
}

function VisitPage(props: VisitPageProps) {
    // const monuments: Monuments[] = [
    //     { name: 'Monument 1', iconName: 'music-note', audioPath: '../assets/audio/canard.mp3' },
    //     { name: 'Monument 2', iconName: 'music-note', audioPath: '../assets/audio/canard.mp3' },
    //     { name: 'Monument 3', iconName: 'music-note', audioPath: '../assets/audio/canard.mp3' },
    // ];

    return (
        <View style={styles.container}>
            <PageHeader title='Visit' onBack={props.onBack} />
            <ScrollView style={styles.audiosContainer}>
                {/* {monuments.map((monument, index) => (
                    <MonumentAudio key={index} name={monument.name} iconName={monument.iconName} audioPath={monument.audioPath} />
                ))} */}
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