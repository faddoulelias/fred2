import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import PageHeader from '../components/PageHeader';
import CameraPanel from '../components/CameraPanel';
import { CameraCapturedPicture } from 'expo-camera';
import { predictImage } from '../api/apiServices';
import PredictionModal from '../components/PredictionModal';

type CameraPageProps = {
    onBack: () => void;
}

function CameraPage(props: CameraPageProps) {
    const [isPredicting, setIsPredicting] = React.useState(false);
    const [prediction, setPrediction] = React.useState<string | null>(null);
    const [showModal, setShowModal] = React.useState(false);

    function onCameraClick(photo: CameraCapturedPicture) {
        setIsPredicting(true);
        setShowModal(true);
        predictImage(photo.uri).then(response => {
            setPrediction(response);
            setIsPredicting(false);
        });
    }

    return (
        <View style={styles.container}>
            <PageHeader title='Camera' onBack={props.onBack} />
            <CameraPanel onPictureTaken={onCameraClick} />
            <PredictionModal
                visible={showModal}
                onClose={() => setShowModal(false)}
                isPredicting={isPredicting}
                prediction={prediction}
            />
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

export default CameraPage;