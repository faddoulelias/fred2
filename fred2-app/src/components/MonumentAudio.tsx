import Slider from "@react-native-community/slider";
import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Sound from "react-native-sound";
import Icon from "react-native-vector-icons/MaterialIcons";

interface MonumentAudioProps {
    name: string;
    iconName: string;
    audioPath: string;
}

function MonumentAudio(props: MonumentAudioProps) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    let sound: Sound;

    useEffect(() => {
        sound = new Sound(props.audioPath,
            Sound.MAIN_BUNDLE,
            (error) => {
                if (error) {
                    console.log('failed to load the sound', error);
                    return;
                }
                console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());
            });

        return () => {
            sound.release();
        };
    }, []);

    const handlePlayPause = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <View style={styles.container}>
            <Icon name={props.iconName} size={50} />
            <Slider
                style={{ width: 250, height: 40 }}
                minimumValue={0}
                maximumValue={duration}
                value={currentTime}
                onValueChange={(value) => setCurrentTime(value)}
            />
            <Icon name={isPlaying ? 'pause' : 'play-arrow'} size={50} onPress={handlePlayPause} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100,
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
});

export default MonumentAudio;