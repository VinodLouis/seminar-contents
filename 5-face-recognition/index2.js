const path = require("path");
const fs = require("fs");
const fr = require("face-recognition");
const modeljson = require("./allmodel.json");

const detector = fr.FaceDetector();

const recognizer = fr.FaceRecognizer();

recognizer.load(modeljson);
const dataPath = [];
dataPath.push(path.resolve("./data/test"));


let allFiles;
let fileImg
let faceImages;
let targetSize;
dataPath.forEach((pt)=>{
	allFiles = fs.readdirSync(pt);
	allFiles.forEach((im)=>{
		fileImg = fr.loadImage(path.join(pt,im));
		faceImages = detector.detectFaces(fileImg, targetSize);
		faceImages.forEach((img)=>{
			const pre = recognizer.predictBest(img);
			console.log(im,pre.className);		
		})
		//recognizer.addFaces(faceImages, 'salman')
	});	
});