// import libraries for making a component
import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';


const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.2,
    elevation: 1,
    position: 'relative'

  },
  textStyle: {
    fontSize: 20,
  }
};

// make a component
const Header = ({ headerText }) => {

  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{headerText}</Text>
    </View>
  );
}

Header.propTypes = {
  headerText: PropTypes.string.isRequired
}


// make the component available to other parts of the app
export default Header;
