# hackpack-react-native

### Overview
In this hackpack we will go over the basics of React Native and Expo to build a simple mobile application. React Native is a framework that allows you to build native mobile applications using JavaScript and React. Expo is a toolchain built around React Native that allows you to easily build, run, and deploy React Native applications. Expo also provides a number of APIs that allow you to access native device functionality such as the camera, accelerometer, and location. 

### Setup
1. Install Node.js and npm
    - Node.js is a JavaScript runtime that allows you to run JavaScript outside of the browser. npm is a package manager for JavaScript that allows you to easily install and manage JavaScript libraries. 
    - You can download Node.js and npm [here](https://nodejs.org/en/download/).
    - To check if you have Node.js and npm installed, run the following commands in your terminal:
        ```
        node -v
        npm -v
        ```
    - For this hackpack, we will be using Node.js version 16.19.1 and npm version 9.6.7.

<br/>

2. Install Expo CLI
    - Expo CLI is a command line tool that allows you to easily build, run, and deploy React Native applications.
    - To install Expo CLI, run the following command in your terminal:
        ```
        npm install -g expo-cli
        ```
    - To install Expo SDK, which is a collection of libraries that provide access to native device functionality, run the following command in your terminal (we'll be using version 48 for this hackpack)
        ```
          npm install expo@48 -g
        ```

Note: You may find that newer packages may have less support across the community libraries and may not be compatible with the latest version of Node.js. If you run into any issues, try using an older versions.

