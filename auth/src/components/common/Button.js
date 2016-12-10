import React, { PropTypes } from 'react';
import { Text, TouchableOpacity } from 'react-native';

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5
  }
};

const Button = ({ onPress, title, children }) => (
  <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
    <Text style={styles.textStyle}>
      {title || children}
    </Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.any
}

export default Button;
export { Button };
