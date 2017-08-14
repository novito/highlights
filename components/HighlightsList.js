import React from 'react'
import { View, Text } from 'react-native';
import _ from 'lodash';
import HighlightItem from './HighlightItem';

export default class HighlightsList extends React.Component {
  componentDidMount() {
    this.props.getHighlights()
  }

  renderHighlights() {
    if (this.props.highlights) {
      console.log("WHAT IS HIGHLIGHTS");
      console.log(this.props.highlights);
    }

    return _.map(this.props.highlights, (highlight, key) => {
      return <HighlightItem key={key} highlight={highlight} id={key} />
    });
  }

  render() {
    return (
      <View>
        {this.renderHighlights()}
      </View>
    );
  }
}
