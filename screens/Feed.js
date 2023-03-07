import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  renderItem = ({ item: story }) => {
    return <StoryCard story={story} />;
  };

  keyExtractor = (item, index) => index.toString();

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Feeds</Text>
      </View>
    );
  }
}
