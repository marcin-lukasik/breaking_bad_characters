

## Clean-Up & Simple Run

Clean up the files from the example repository and do not forget to install the dependencies
There is a good example by default on `CharactersScreen`. You can delete the all screens.

- `npm i`
- `npm run clean-up`
- `npm i && npx pod-install`
- `react-native run-ios/android`
### Install Pods (iOS Only)

- `npm i`
- `cd ios && pod install`
- `cd .. && react-native run-ios/android`

### Android local.properties (Android Only)

- `npm i`
- `cd android && mkdir local.properties`
- `nano local.properties`

#### Example of MacOS Android SDK Path

Make sure that set your right path of Android **SDK**

##### MacOS / Linux

Replace your machine name instead of `username`

```
sdk.dir=/Users/username/Library/Android/sdk
```

##### Windows

Replace your machine name instead of `username`

```
sdk.dir=/Users/username/Library/Android/sdk
```

- `cd .. & react-native run-ios/android`
