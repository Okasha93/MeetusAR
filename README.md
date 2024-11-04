Project Name: MeetusAR
Overview
This document provides instructions on how to download, install, and test the development version of the Android application. This APK is built for testing purposes to allow the team to experience the current features and user experience of the app on an actual device. This development build includes all relevant functionalities and allows live updates via the Expo DevTools for rapid testing.

APK Download Link
To download the APK file, use the link below:
https://expo.dev/artifacts/eas/aKzzKiJaD4pybpHw9e9qXj.apk
Note: Make sure your device allows installation from unknown sources. You can enable this in Settings > Security > Install Unknown Apps.

Installation Instructions
Download the APK: Click on the APK link above to download the file to your Android device.
Allow Installation from Unknown Sources (if not enabled):
Go to Settings > Security.
Enable Install Unknown Apps for the browser you used to download the APK.
Install the APK:
Once downloaded, open the APK file and follow the installation prompts.
Open the App:
After installation, you can open the app directly or find it in your device’s app drawer.
Testing Instructions
This build is configured to work as a development client with live reloading. Below are the steps for using it in testing mode.

Connecting the App to the Development Server
Start the Expo Development Server:

Open a terminal on your development machine.

Run the following command:

bash
Copy code
npx expo start
Connect the App to the Server:

Make sure your mobile device and development machine are on the same Wi-Fi network.
In the Expo DevTools, set the connection mode to Tunnel.
Open the app on your Android device. It will automatically connect to the server for live reloading.
Available Features for Testing
User Authentication: Login functionality with input validation and error messaging.
Dashboard Screen: A dashboard displaying user data, logout functionality, and navigation options.
Live Reloading: Changes to the app will appear immediately on the device for rapid testing.
Testing Tips
Hot Reloading: Enable hot reloading on the device to automatically see code changes without reinstalling the app.
Error Logging: Check for error messages on the device and monitor the Expo DevTools for any additional logs.
Known Issues & Limitations
Dependency Conflicts: Some dependency conflicts may occur due to Redux versions. The build uses --legacy-peer-deps to resolve these for now.
Performance: As this is a development build, performance may not be optimized. For a smoother experience, please use a production build when testing final features.
Feedback
Please document any issues, suggestions, or feedback during testing and report back to the development team. Your input is crucial for refining the app before release.
