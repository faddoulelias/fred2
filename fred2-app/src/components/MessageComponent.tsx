import { StyleSheet, View, Text } from "react-native";

interface MessageComponentProps {
    isUser: boolean;
    message: string;
}

function MessageComponent(props: MessageComponentProps) {
    return (
        <View style={props.isUser ? styles.userMessage : styles.botMessage}>
            <Text>{props.message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    userMessage: {
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    botMessage: {
        backgroundColor: 'lightgreen',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-end',
        marginBottom: 10,
    },
});

export default MessageComponent;