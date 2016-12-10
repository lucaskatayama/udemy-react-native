import React, { PropTypes } from 'react';
import { View } from 'react-native';

const styles = {
    cardStyle: {
      padding: 5,
      backgroundColor: '#fff',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      position: 'relative'
    }
}

const CardSection = (props) => (
  <View style={styles.cardStyle} >
    {props.children}
  </View>
);

CardSection.propTypes = {
  children: PropTypes.any
}

export default CardSection;
