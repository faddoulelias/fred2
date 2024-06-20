import Slider from "@react-native-community/slider";
import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Audio } from 'expo-av';

interface MonumentAudioProps {
    name: string;
    iconName: string;
    audio: any;
}

function MonumentAudio(props: MonumentAudioProps) {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState<number>(0);
    const [sound, setSound] = React.useState<Audio.Sound | null>(null);

    async function loadSound() {
        const { sound } = await Audio.Sound.createAsync(props.audio);
        setSound(sound);
    }

    async function updatePlaybackStatus() {
        if (!sound) return;

        sound.setOnPlaybackStatusUpdate((status) => {
            if (status.isLoaded) {
                setDuration(status.durationMillis || 0);
                setCurrentTime(status.positionMillis);
            }
            if ((status as any).didJustFinish) {
                setIsPlaying(false);
                console.log('Finished playing audio');
            }
        });
    }

    const updateSliderTime = async (value: number) => {
        const interval = setInterval(async () => {
            if (sound && isPlaying) {
                const status = await sound.getStatusAsync();
                setCurrentTime((status as any).positionMillis || 0);
            }
        }, 100);
        return () => clearInterval(interval);
    }

    useEffect(() => { loadSound() }, []);
    useEffect(() => { updatePlaybackStatus() }, [sound]);
    useEffect(() => { if (isPlaying) updateSliderTime(currentTime); }, [sound, isPlaying]);



    const handlePlayPause = async () => {
        if (sound) {
            if (isPlaying) {
                await sound.pauseAsync();
            } else {
                await sound.playAsync();
            }
            setIsPlaying(!isPlaying);
        }
    }

    const updateCurrentTime = async (value: number) => {
        if (sound) {
            await sound.setPositionAsync(value);
            setCurrentTime(value);
        }
    }

    return (
        <View style={styles.container}>
            <Icon name={props.iconName} size={50} />
            <View style={styles.audioInfo}>
                <Text>{props.name}</Text>
                <Slider
                    style={{ width: 250, height: 40 }}
                    minimumValue={0}
                    maximumValue={duration}
                    value={currentTime}
                    onValueChange={(value) => updateCurrentTime(value)}
                />
            </View>
            <Icon name={isPlaying ? 'pause' : 'play'} size={50} onPress={handlePlayPause} />
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

    audioInfo: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MonumentAudio;