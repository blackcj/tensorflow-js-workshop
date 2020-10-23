// More API functions here:
// https://github.com/googlecreativelab/teachablemachine-community/tree/master/libraries/image

// the link to your model provided by Teachable Machine export panel
const URL = './demo-image-model/';

let model, webcam, labelContainer, maxPredictions;
const flip = true; // whether to flip the webcam

$(document).ready(async function() {
    const modelURL = URL + 'model.json';
    const metadataURL = URL + 'metadata.json';
    // load the model and metadata
    // Refer to tmImage.loadFromFiles() in the API to support files from a file picker
    // or files from your local hard drive
    // Note: the pose library adds "tmImage" object to your window (window.tmImage)
    model = await tmImage.load(modelURL, metadataURL);
    maxPredictions = model.getTotalClasses();

    $('#start-button').on('click', function() {
        $('#start-button').hide();
        init();
    });
});

// Load the image model and setup the webcam
async function init() {
    // Convenience function to setup a webcam
    webcam = new tmImage.Webcam(400, 300, flip); // width, height, flip
    await webcam.setup(); // request access to the webcam
    await webcam.play();
    window.requestAnimationFrame(loop);

    // append elements to the DOM
    $('#webcam-container').append(webcam.canvas);
    labelContainer = $('#label-container');
    for (let i = 0; i < maxPredictions; i++) { // and class labels
        $('#label-container').append('<div></div>');
    }
}

async function loop() {
    webcam.update(); // update the webcam frame
    await predict();
    window.requestAnimationFrame(loop);
}

// run the webcam image through the image model
async function predict() {
    // predict can take in an image, video or canvas html element
    const prediction = await model.predict(webcam.canvas);
    for (let i = 0; i < maxPredictions; i++) {
        const classPrediction = prediction[i].className + ': ' + prediction[i].probability.toFixed(2);
        $('#label-container').children().eq(i).html(classPrediction)
    }
}