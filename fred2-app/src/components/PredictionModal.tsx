import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { getClassName } from "../api/apiServices";

interface ModalProps {
    visible: boolean;
    isPredicting: boolean;
    prediction: string | null;
    onClose: () => void;
}

function Modal(props: ModalProps) {
    if (!props.visible) return null;

    return (
        <View style={styles.container}>
            <View style={styles.modal}>
                <Text style={styles.modalTitle}>
                    {props.isPredicting ? 'Predicting...' : 'Prediction Result'}
                </Text>

                {props.isPredicting ? null : (
                    <Text>
                        Vous semblez être devant{' : '} {getClassName(props.prediction as any)}
                    </Text>
                )}

                <TouchableOpacity onPress={props.onClose}>
                    <Text style={styles.closeButton}>Close</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    closeButton: {
        color: 'blue',
        marginTop: 10,
    },
});

export default Modal;