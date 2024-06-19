import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as FileSystem from 'expo-file-system';

export default function App() {
    const camera = useRef<CameraView>(null);
    const [facing, setFacing] = useState<'front' | 'back'>('back');
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    async function captureImage() {
        if (camera.current) {
            const photo = await camera.current.takePictureAsync({ base64: true });

            const data = new FormData();
            data.append('file', {
                uri: photo.uri,
                name: 'photo.jpg',
                type: 'image/jpeg'
            } as any);

            try {
                const response = await fetch('http://192.168.66.197:5000/upload', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    body: data,
                });

                const responseJson = await response.json();
                console.log('Image uploaded successfully:', responseJson);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing} ref={camera}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={captureImage}>
                        <Text style={styles.text}>Capture</Text>
                    </TouchableOpacity>
                </View>
            </CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
});
