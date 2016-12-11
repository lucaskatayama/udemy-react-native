import React from 'react';
import { View } from 'react-native';

const containerStyle = {
  flexDirection: 'row',
  position: 'relative'
};

const Container = (props) => (
  <View style={containerStyle}>
    {props.children}
  </View>
);


export { Container };
