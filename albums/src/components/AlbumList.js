import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import {root as ROOT_API} from '../config';
import AlbumDetail from './AlbumDetail';


class AlbumList extends Component {
  // This is a different way to declare initial state
  state = {
    albums: [

    ],
    fetching: false  // when true, 'Loading...' text will be shown
  }

  componentWillMount() {
    this.setState({fetching: true})
    axios.get(`${ROOT_API}/music_albums`)
      .then(resp => resp.data)
      .then(json => this.setState({albums: json, fetching: false}));
  }

  renderAlbums() {
    return this.state.albums.map((album, idx) => <AlbumDetail key={idx} album={album} />);
  }

  render() {
    const data = this.state.fetching
      ? <Text>Loading...</Text>
      : this.renderAlbums();
    return (
      <ScrollView>
        {data}
      </ScrollView>
    )
  }
}


export default AlbumList;
