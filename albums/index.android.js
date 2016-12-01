// Index.android.js - place code for Android.


// Import a library to help create a component
import React from 'react';
import ReactNative from 'react-native';

// Create a Component
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

// Render it to device
ReactNative.AppRegistry.registerComponent('albuns', () => App);
