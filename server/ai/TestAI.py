# Now we want to test the model.h5 file that we saved in the previous step.
import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
# We will prompt the user to upload an image and then we will use the model to predict the class of the image.
import tensorflow as tf
import numpy as np

from PIL import Image

# Load the model
model = tf.keras.models.load_model('database/model.keras')

while True :
    # Load the image
    image_path = input("Enter the path to the image: ")
    img = Image.open(image_path)
    img = img.resize((180, 180))
    img = np.array(img)

    # Predict the class of the image
    img = np.expand_dims(img, axis=0)
    predictions = model.predict(img)
    print(predictions)
    print(np.argmax(predictions))
    class_names = ['avion', 'chambre_onde', 'jacques_julien', 'moteur', 'robot']
    print("The image belongs to the class: ", class_names[np.argmax(predictions)])
