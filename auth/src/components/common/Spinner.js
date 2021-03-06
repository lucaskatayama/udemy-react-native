import React, { PropTypes } from 'react';
import { View, ActivityIndicator } from 'react-native';

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  }
}

const Spinner = ({ size }) => (
  <View style={styles.spinnerStyle}>
    <ActivityIndicator size={size || 'large'}/>
  </View>
);


Spinner.propTypes = {
  size: PropTypes.string,
}

export default Spinner;
export { Spinner };
