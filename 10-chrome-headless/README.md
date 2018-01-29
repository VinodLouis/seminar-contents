
# Headless Chrome

An application demostrating headless chrome

 - NodeJS
 - chrome-remote-interface
 
To run the application go to root of the project in terminal and follow:

    npm install
Then start headless chrome as follwoing from chrome exe directory

    chrome --headless --hide-scrollbars --remote-debugging-port=9222 --disable-gpu
Once done use following command to take screen shot

    node server.js --url https://www.google.com
The application will save screenshot