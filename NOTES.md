# Lesson 7

## Building the APP

### Android

<https://reactnativecode.com/generate-signed-release-android-apk/>

#### Generating a key for your app

Each project (APP) you develop must have its own key, which is an unique identifier for your app for the Google Play Store.

In order to generate the key, you must run the following code in a terminal.

~~~~bash
keytool -genkey -v -keystore release-key.keystore -alias key-alias -keyalg RSA -keysize 2048 -validity 10000
~~~~

Explica melhor esse comando ae, Quissa.

This command will initiate a questionnaire that must be answered question by question in order for the Google Play Store classify your APP.

You must then edit your gradle.properties file with the information of your key.

Finally run the following command:

~~~~bash
cd android && gradlew assembleRelease
~~~~

This will generate the apk file in the following path android/app/build/outputs/apk.

From there you can share your apk manually or publish in the Google Play Store

### iOS

Indefinite TODO.

## TODO

- [] iOS
