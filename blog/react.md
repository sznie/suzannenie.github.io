## Get Started With React Native

install npm <br>
[https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac](https://radixweb.com/blog/installing-npm-and-nodejs-on-windows-and-mac)

[reactnative.dev tutorial](https://reactnative.dev/docs/tutorial?language=javascript) <br>
[how-to-build-ios-apps-using-react-native](https://blog.logrocket.com/how-to-build-ios-apps-using-react-native/)

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
npx react-native init todo
sudo gem install activesupport -v 6.1.7.6
sudo gem install cocoapods
npx react-native init todo
```

also download Xcode <br>
```npm run ios```

To fix:
- Failed to build iOS project. We ran "xcodebuild" command but it exited with error code 65. To debug build logs further, consider building your app with Xcode.app, by opening todo.xcodeproj <br>
- new NativeEventEmitter() requires a non-null argument <br>
remove Podfile.lock and Pod folder
[stack overflow](https://stackoverflow.com/questions/55235825/error-failed-to-build-ios-project-we-ran-xcodebuild-command-but-it-exited-wit)
```
cd ios
pod install
delete build folder
```

To build on iphone, check signing and capabilities in xcode