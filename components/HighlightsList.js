import React from 'react'
import { View, Text } from 'react-native';

export default class HighlightsList extends React.Component {
  componentDidMount() {
    this.props.getHighlights()
  }

  render() {
    return (
      <View>
        <Text> TEST </Text>
      </View>
    );
  }
}
