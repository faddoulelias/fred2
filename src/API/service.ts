import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://192.168.66.197:5000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export const chatWithGroq = async (question: string) => {
    try {
        const response = await apiClient.post('/chat', { question });
        return response.data.response;
    } catch (error: any) {
        console.error('Error fetching data from Flask API:', error.response ? error.response.data : error.message);
        throw error;
    }
};