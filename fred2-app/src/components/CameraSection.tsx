import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface CameraPanelProps {
    onCameraPress: () => void;
}

function CameraSection(props: CameraPanelProps) {
    return (
        <ImageBackground source={require('../../assets/images/versailles.png')} style={styles.imageBackground} >
            <TouchableOpacity onPress={props.onCameraPress}>
                <View style={styles.cameraView}>
                    <Icon style={styles.cameraIcon} name="camera" size={40} color="#000" />
                </View>
            </TouchableOpacity>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    imageBackground: {
        display: 'flex',
        paddingTop: 100,
        paddingBottom: 100,
        alignItems: 'center',
        justifyContent: 'center',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },

    cameraView: {
        display: 'flex',
        width: 100,
        height: 100,
        backgroundColor: '#fff',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },

    cameraIcon: {
        color: '#000',
    },
});


export default CameraSection;