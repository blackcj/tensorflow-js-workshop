# Tensorflow.js Workshop

**TensorFlow is an end-to-end open source platform for machine learning.** [https://www.tensorflow.org/](https://www.tensorflow.org/)

With TensorFlow we can use existing models or create new models that can be applied to text, speach, images or video. Input is run through the model and TensorFlow will output results along with confidence levels.

Machine Learning is a big topic. We will stay high level with this workshop by tools provided by TensorFlow for quickly creating models that we can use in the web with TensorFlow.js.

## Setup

There is a sample model provided that has been trained to detect whether someone is wearing a face mask. This model was trained just a handful of images and may not be very accurate. After running the test, try training a model of your own!

```
npm install
npm start
```

Visit [http://localhost:5000](http://localhost:5000) in your browser and click to allow access to your webcamera.

**NOTE: Some browsers may require https in order to access the webcamera.**

## Training a Model

- https://teachablemachine.withgoogle.com/train/image
- Train your model
- Test your model using your web camera
- Export your model
- Unzip your exported model and copy the containing folder into the public folder of this project
- In `client.js`, update `const URL = './demo-image-model/';` to point to your model

## Troubleshooting

If you get the error `Error: The implicit shape can't be a fractional number.` with the image classifier, try a different image. Using screen shot images do not appear to work. 

## Resources

- https://www.tensorflow.org/js/demos
- https://becominghuman.ai/image-classification-machine-learning-in-node-js-with-tensorflow-js-dd8e20ba5024