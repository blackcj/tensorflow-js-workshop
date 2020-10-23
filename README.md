# Tensorflow.js Workshop

**TensorFlow is an end-to-end open source platform for machine learning.** [https://www.tensorflow.org/](https://www.tensorflow.org/)

In this workshop, we will use *supervised learning* to build a model that can be used for image classification. TensorFlow supports a variety of different input types, we will be using images to build our model. After creating a model, we will be able to pass in data and get results with confidence levels.

> NOTE: Machine Learning is a big topic. We will stay high level with this workshop by using tools provided by TensorFlow for quickly creating models that we can use with [TensorFlow.js](https://www.tensorflow.org/js).

### Supervised Learning

There are many different approaches to machine learning. We will be using *supervised learning* which is the process of providing input data and classifying that data into predefined buckets. This approach is good when the input and output parameters are well defined (e.g. wearing a facemask or not wearing a facemask). Depending on the problem you are trying to solve, you may want to explore [other approaches](https://towardsdatascience.com/types-of-machine-learning-algorithms-you-should-know-953a08248861). 

Results from *supervised learning* models will depend greatly on the quality and quantity of input provided when creating the model. A small sample dataset will result in poor classification. It's important to thouroughly test your model before using it to make decisions in a real world setting. Machine Learning models can (and often do) [have bias](https://lionbridge.ai/articles/7-types-of-data-bias-in-machine-learning/). 

## Prerequisites

If you've done any web development in the past, you likely have most of these setup already.

- [Node.js](https://nodejs.org/en/download/)
- [GitHub account](https://github.com/) (optional but recommended)
- [**git** command line tools](https://git-scm.com/downloads) (needed for deployment)
- [Heroku account](https://www.heroku.com/) (needed for deployment)

## Setup

There is a sample model provided that has been trained to detect a face mask. **This model was trained just a handful of images and will not be very accurate.** After running the test, try training a model of your own!

After downloading or forking and cloning this project. Open the project folder using terminal and type the following command:

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
- Stop your local server by pressing **ctrl** and **c** at the same time in your terminal window
- Type `npm start` to restart your server
- If you're familiar with HTML / CSS, try adding some styling to the page.

## Deploy to Heroku

Once everything is working the way you would like, you can deploy the project to Heroku. 

- Sign up for a free account on [Heroku](https://www.heroku.com/)
- Stop your local server by pressing **ctrl** and **c** at the same time in your terminal window
- Make sure your project is a **git** repository
- Type `heroku create` in terminal
- Type `git push heroku master` in terminal

## Troubleshooting

If you get the error `Error: The implicit shape can't be a fractional number.` with the image classifier, try a different image. Using screen shot images do not appear to work. 

## Resources

- https://www.tensorflow.org/js/demos
- https://becominghuman.ai/image-classification-machine-learning-in-node-js-with-tensorflow-js-dd8e20ba5024