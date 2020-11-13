# Quissamã Calculator

This project was created as a step by step tutorial on React Native Apps.
We developed a calculator as a prototype app and reviewed several React and React-Native concepts.
The tutorial was built as an Android App, but the exact code and examples should work for iOS.

---

## Authors

- [Lucas Craveiro Paes](https://github.com/lucascraveiropaes)
- [Pedro Goñi Coelho](https://github.com/pedrogonic)

## Table of contents

- [1. Installation](#1-installation)
    - [1.1. Official](#11-official)
    - [1.2. Dependencies](#12-dependencies)
    - [1.3. Overview](#13-overview)
- [2. Tips on running](#2-tips-on-running)
- [3. Building](#3-building)
- [4. How to follow the lessons](#4-how-to-follow-the-lessons)
- [5. Progress](#5-progress)

## 1. Installation

### 1.1. Official

You can follow the process in the following link:
<https://facebook.github.io/react-native/docs/getting-started.html>

### 1.2. Dependencies

* Node
* React Native CLI
* Java SE Development Kit (Android)
* Android Studio (Android)

### 1.3. Overview

With all dependencies installed and configured, open the terminal of your preference, change directory to the parent folder where you want the project to be located, and run

~~~~bash
react-native init QuissamaCalculator ## installs dependencies
~~~~

this will create the project's folder and install remaining dependencies.

To install the app in an android device connected via USB:

~~~~bash
cd ./QuissamaCalculator ## change to project's directory
adb reverse tcp:8081 tcp:8081 ## forwards node server in localhost:8081 to device's 8081 port
react-native run-android ## installs app
~~~~

After installation, run this code in your project foler anytime you want to start the app:

~~~~bash
npm start ## starts node development server
~~~~

## 2. Tips on running

After saving your files, you can immediately view your changes in the device by enabling Live/Hot Reloading. This can be enabled in the Developer Menu.
Otherwise, simply hit reload in the Developer Menu.

To open the Developer Menu in your device, shake it!
If you're like me and get tired of that pretty quickly, open another terminal window and run:

~~~~bash
adb shell input keyevent 82
~~~~

This sends the KEYCODE_MENU value to the device which ends up opening the menu.

To debug your application, you can enable Remote JS Debugging in the menu. This opens a new tab in Chrome. There, you can open the dev console (F12 or Shift+Ctrl+I in Windows) and check your console.log()'s in the console tab.

## 3. Building

Checkout branch lessons/08!

## 4. How to follow the lessons

Each lesson has a branch under lessons/ in the repository. Checkout each branch and open the NOTES.md file to understand the covered concepts.

## 5. Progress

- [x] 01 - Counter (Basics)
- [x] 02 - Count Button (Start to componentize)
- [x] 03 - Components (Follow a pattern)
- [x] 04 - Props (Lifecycles)
- [x] 05 - Calculator (Let's do this!)
- [x] 06 - Redux (Global state)
- [x] 07 - Pagination (Single page apps are useless!)
- [x] 08 - Building (Carry your app around)
- [ ] 09 - Finish documentation (NOTES.md)
