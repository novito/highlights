import React from 'react'
import { View, Text } from 'react-native';

export default class HighlightsList extends React.Component {
  componentDidMount() {
    this.props.getHighlights()
  }

  render() {
    console.log("HIGHLIGHTS LIST");
    console.log(this.props.highlightsList);
    return (
      <View>
        <Text> TEST </Text>
      </View>
    );
  }
}
