import { StyleSheet, Text, View, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import React from 'react';
import PageHeader from '../components/PageHeader';
import { sendMessageRequest, ChatResponse } from '../api/apiServices';
import MessageComponent from '../components/MessageComponent';

type Message = {
    text: string;
    isUser: boolean;
}

type ChatPageProps = {
    onBack: () => void;
}

function ChatPage(props: ChatPageProps) {
    const [messages, setMessages] = React.useState<Message[]>([]);
    const [message, setMessage] = React.useState<Message['text']>('');
    const scrollViewRef = React.useRef<ScrollView>(null);

    const sendMessage = () => {
        if (message) {
            sendMessageRequest(message).then((response: ChatResponse) => {
                setMessages([...messages, { text: message, isUser: true }, { text: response.response, isUser: false }]);
                setMessage('');
            }).catch((error) => {
                setMessages([...messages, { text: message, isUser: true }, { text: error.response, isUser: false }]);
                setMessage('');
            });
        }
    }

    return (
        <View style={styles.container}>
            <PageHeader title='Chat' onBack={props.onBack} />
            <ScrollView style={styles.messagesContainer} ref={scrollViewRef} onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}>
                {messages.map((message, index) =>
                    <MessageComponent key={index} message={message.text} isUser={message.isUser} />
                )}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
                    <Text>Send</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
    },

    messagesContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        padding: 10,
    },

    inputContainer: {
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        backgroundColor: '#fff',
        elevation: 5,
    },

    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#aaa',
        borderRadius: 10,
        padding: 10,
    },

    sendButton: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#aaa',
        padding: 10,
        borderRadius: 10,
        marginLeft: 10,
    },
});

export default ChatPage;