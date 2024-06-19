import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { chatWithGroq } from '../API/service';

type MessageType = 'question' | 'answer' | 'error';
type Message = { type: MessageType, text: string };

const ChatScreen = () => {
    const [question, setQuestion] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSend = async () => {
        if (question.trim() === '') return;

        const newMessage: Message = { type: 'question', text: question };
        setMessages([...messages, newMessage]);
        setQuestion('');
        setLoading(true);

        try {
            console.log('Fetching answer for question:', question);
            const response: string = await chatWithGroq(question);
            console.log('API Response:', response);
            const newAnswerMessage: Message = { type: 'answer', text: response };
            setMessages((prevMessages) => [...prevMessages, newAnswerMessage]);
        } catch (err: any) {
            console.error('Error fetching answer:', err.response ? err.response.data : err.message);
            const errorMessage: Message = { type: 'error', text: 'Failed to fetch answer. Please try again.' };
            setMessages((prevMessages) => [...prevMessages, errorMessage]);
            setError('Failed to fetch answer');
        } finally {
            setLoading(false);
        }
    };

    const renderItem = ({ item }: { item: Message }) => (
        <View style={[styles.message, item.type === 'question' ? styles.question : item.type === 'answer' ? styles.answer : styles.error]}>
            <Text style={styles.messageText}>{item.text}</Text>
        </View>
    );

    return (
        <ImageBackground source={require('../../assets/ruche.png')} style={styles.background}>
            <View style={styles.container}>
                <FlatList
                    data={messages}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
                {loading && <ActivityIndicator size="large" color="#0000ff" />}
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        value={question}
                        onChangeText={setQuestion}
                        placeholder="Ask your question..."
                    />
                    <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                        <Icon name="send" size={24} color="#000" />
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.3)',  // Add some transparency to make the text more readable
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingTop: 0,
        backgroundColor: 'rgba(255, 255, 255, 0.6)',  // Add some transparency
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 10,
    },
    sendButton: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
    },
    message: {
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',  // Add some transparency
    },
    question: {
        backgroundColor: 'rgba(224, 247, 250, 0.8)',  // Add some transparency
        alignSelf: 'flex-start',
    },
    answer: {
        backgroundColor: 'rgba(240, 240, 240, 0.8)',  // Add some transparency
        alignSelf: 'flex-end',
    },
    error: {
        backgroundColor: 'rgba(248, 215, 218, 0.8)',  // Add some transparency
        alignSelf: 'flex-start',
    },
    messageText: {
        fontSize: 16,
    },
});

export default ChatScreen;