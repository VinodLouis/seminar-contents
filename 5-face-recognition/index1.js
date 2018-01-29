const path = require("path");
const fs = require("fs");
const fr = require("face-recognition");
const detector = fr.FaceDetector();
const dataPath = [];
const recognizer = fr.FaceRecognizer();
dataPath.push(path.resolve("./data/salman"));
dataPath.push(path.resolve("./data/genilia"));
dataPath.push(path.resolve("./data/kajal"));
dataPath.push(path.resolve("./data/preity"));
dataPath.push(path.resolve("./data/apj"));

let allFiles;
let fileImg
let faceImages;
let targetSize;
dataPath.forEach((pt)=>{
	const name = pt.split("\\")[pt.split("\\").length-1]
	allFiles = fs.readdirSync(pt);
	allFiles.forEach((im)=>{
		fileImg = fr.loadImage(path.join(pt,im));
		faceImages = detector.detectFaces(fileImg, targetSize);
		console.log(faceImages.length);
		recognizer.addFaces(faceImages, name)
	});	
});

const modelState = recognizer.serialize()
fs.writeFileSync('allmodel.json', JSON.stringify(modelState));
	
