import os
from flask import Flask, request, jsonify
from groq import Groq

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

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)