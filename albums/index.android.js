// Index.android.js - place code for Android.

// Import a library to help create a component
import React from 'react';
import { Text, AppRegistry } from 'react-native';

// Create a Component
const App = () => (
  <Text>
    Some Text
  </Text>

);

// Render it to device
AppRegistry.registerComponent('albums', () => App);
