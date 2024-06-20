import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://192.168.46.197:5000',  // Update this to your local IP address
    headers: {
        'Content-Type': 'application/json',
    },
});

export type ChatResponse = {
    isError: boolean;
    response: string;
}

export async function sendMessageRequest(message: string): Promise<ChatResponse> {
    try {
        const response = await apiClient.post('/chat', { question: message });
        return { isError: false, response: response.data.response };
    } catch (error) {
        return { isError: true, response: "An error occurred while fetching data from the server. Please try again later." };
    }
}
type ImageClass = 'avion' | 'chambre_onde' | 'jacques_julien' | 'moteur' | 'robot'

export async function predictImage(imageUri: string): Promise<ImageClass | string> {
    const data = new FormData();
    data.append('file', {
        uri: imageUri,
        name: 'photo.jpg',
        type: 'image/jpeg'
    } as any);

    try {
        const response = await apiClient.post('/upload', data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });

        return response.data.class;
    } catch (error) {
        console.error('Error uploading image:', error);
        return 'An error occurred while uploading the image. Please try again later.';
    }
}

export function getClassName(classId: ImageClass): string {
    switch (classId) {
        case 'avion':
            return 'Le planeur';
        case 'chambre_onde':
            return 'La chambre à blindage électromagnétique';
        case 'jacques_julien':
            return 'Le bâtiment Jacques-Julien';
        case 'moteur':
            return 'Le moteur';
        case 'robot':
            return 'Le robot';
        default:
            return 'Unknown';
    }
}