import React, { PropTypes, Component } from 'react';
import { View, Text, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  },
  footerStyle: {
    display: 'block',
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

class Album extends Component {
  static propTypes = {
    album: PropTypes.shape({
      title: PropTypes.string,
      artist: PropTypes.string,
      thumbnail_image: PropTypes.string,
      image: PropTypes.string,
      url: PropTypes.string
    })
  };

  constructor() {
    super();
    this.handleOnPress = this.handleOnPress.bind(this);
  }

  handleOnPress() {
    Linking.openURL(this.props.album.url);
  }

  render() {
    const {
      title,
      artist,
      image,
      thumbnail_image
    } = this.props.album;
    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image source={{uri: thumbnail_image}} style={styles.thumbnailStyle} />
          </View>
          <View style={styles.headerContentStyle} >
            <Text style={styles.headerTextStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image resizeMode="center" source={{ uri: image }} style={styles.imageStyle}/>
        </CardSection>
        <CardSection>
          <Button
            style={styles.footerStyle}
            title="Buy now"
            onPress={this.handleOnPress}
          />
        </CardSection>
      </Card>
    );
  }
}



export default Album;
