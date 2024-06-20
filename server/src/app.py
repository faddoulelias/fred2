from flask import Flask, request, jsonify
import matplotlib.pyplot as plt
import tensorflow as tf
from PIL import Image
from groq import Groq
import numpy as np
import os

app = Flask(__name__)


client = Groq(api_key=os.environ.get("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"))

def chat_with_groq(prompt):
    try:
        
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": prompt,
                }
            ],
            model="llama3-8b-8192", 
        )
        return chat_completion.choices[0].message.content.strip()
    except Exception as e:
        return f"An error occurred: {e}"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    question = data.get('question')
    if not question:
        return jsonify({'error': 'No question provided'}), 400

    print(f"Received question: {question}")
    response = chat_with_groq(question)
    print(f"Sending response: {response}")
    return jsonify({'response': response})

@app.route('/upload', methods=['POST'])
def upload_file():
    model = tf.keras.models.load_model('../server/database/model.keras')
    print("got here")
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    print(f"Received file: {file}")
    
    img = Image.open(file)
    img = img.resize((180, 180))
    img = np.array(img)
    
    img = np.expand_dims(img, axis=0)
    predictions = model.predict(img)
    print(predictions)
    print(np.argmax(predictions))
    class_names = ['planeur', 'chambre_onde', 'jacques_julien', 'moteur', 'robot']
    print("The image belongs to the class: ", class_names[np.argmax(predictions)])

    return jsonify({'class': class_names[np.argmax(predictions)]})
    
    
    
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)