
# Deep Learning Image recognition

An application using dlib and face-recognition library

 - NodeJS
 - dLib
 - face-recognition
 
To run the application go to root of the project in terminal and follow:

    npm install
To train the recognizer run 

    node index1.js
this will create and json file name allmodel.json file which contains data which will be used in recognizer module

Now to detect faces use the same allmodel.json file created and run

    node index2.js
It will give you output.