import { CameraCapturedPicture, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface CameraPanelProps {
    onPictureTaken: (image: CameraCapturedPicture) => void;
}

export default function CameraPanel({ onPictureTaken }: CameraPanelProps) {
    const [facing, setFacing] = useState<CameraType>('back');
    const [permission, requestPermission] = useCameraPermissions();
    const camera = useRef<CameraView>(null);

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    async function handleTakePicture() {
        if (camera.current) {
            console.log('Taking picture...');
            const photo = await camera.current.takePictureAsync({ base64: true });
            if (photo) onPictureTaken(photo);
        }
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing={facing} ref={camera}>
                <TouchableOpacity onPress={toggleCameraFacing} style={styles.cameraRotateButton}>
                    <Icon name="cameraswitch" size={24} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.cameraCaptureButton}
                    onPress={handleTakePicture}
                >
                    <Icon name="help" size={60} />
                </TouchableOpacity>
            </CameraView>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
        height: '100%'
    },
    cameraRotateButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 5,
        elevation: 5,
    },
    cameraCaptureButton: {
        position: 'absolute',
        bottom: 30,
        alignSelf: 'center',
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 100,
        elevation: 5,
    },
});