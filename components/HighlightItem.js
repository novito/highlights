import React from 'react'
import { View, Text } from 'react-native';
import _ from 'lodash';

export default class HighlightItem extends React.Component {
  render() {
    return (
      <View>
        <Text> {this.props.highlight.title} </Text>
      </View>
    );
  }
}
