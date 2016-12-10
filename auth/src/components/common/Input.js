import React, { PropTypes } from 'react';
import { TextInput, View, Text } from 'react-native';

const styles = {
  labelStyle: {
    fontSize: 16,
    paddingLeft: 20,
    paddingRight: 10,
    textAlign: 'right',
    flex: 1
  },
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    marginRight: 10,
    fontSize: 16,
    lineHeight: 23,
    flex: 2
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

const Input = ({ label, onChangeText, value, placeholder, autoCorrect, secureTextEntry }) => (
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      onChangeText={onChangeText}
      autoCorrect={autoCorrect}
      secureTextEntry={secureTextEntry}
      value={value}
      style={styles.inputStyle}
    />
  </View>
);

Input.propTypes = {
  label: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  autoCorrect: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
}

export default Input;
export { Input };
