//teachablemachine: https://teachablemachine.withgoogle.com/models/mhgNqS1fP/model.json
Webcam.set({
    width:485,
    height:440,
    image_format:"png",
    png_quality:90
})

Webcam.attach("#camera")

function takePic(){
    Webcam.snap(
    function(data_url){
        document.getElementById("pictaken").innerHTML = "<img id='imageTaken' src='"+data_url+"'</img>"
    }
)
}

console.log("ml5 version: ", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/mhgNqS1fP/model.json", modelL)
function modelL(){
    console.log("Loaded.")
}
