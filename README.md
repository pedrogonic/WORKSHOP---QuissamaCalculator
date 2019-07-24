This project was created as a step by step tutorial on React Native Apps.
We developed a calculator as a prototype app and reviewed several React and React-Native concepts.
The tutorial was built as an Android App, but the exact code and examples work for iOS.


Installation:
https://facebook.github.io/react-native/docs/getting-started.html

With all dependencies installed and configured, open the terminal of your preference, change directory to the parent folder where you want the project to be located, and run

react-native init QuissamaCalculator

this will create the project's folder and install remaining dependencies.

To install the app in android:

cd ./QuissamaCalculator
adb reverse tcp:8081 tcp:8081
react-native run-android

After installation, run this code anytime you want to start the app:

npm start
