import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

interface PageIconProps {
    iconName?: string;
    title?: string;
    onPress?: () => void;
}

function PageIcon(props: PageIconProps) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Icon style={styles.icon} name={props.iconName ? props.iconName : "question-circle"} size={60} color="#000" />
                </View>
                <Text style={styles.iconText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    iconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        width: 100,
        height: 100,
        borderRadius: 100,

        backgroundColor: '#aaa',
    },

    icon: {
        color: '#fff',
    },

    iconText: {
        color: '#fff',
        fontSize: 17,
        marginTop: 10,
    },
});

export default PageIcon;