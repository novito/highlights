import firebase from '../firebase';

const addHighlightAction = (highlight) => ({
  type: 'ADD_HIGHLIGHT',
  ...highlight
});

const highlightsReceived = (highlights) => ({
  type: 'RECEIVED_HIGHLIGHTS',
  highlights
});

export function addHighlight(highlightData) {
  let highlight = {
    text: highlightData.text,
    timestamp: highlightData.date.getTime(),
  };

  return function (dispatch) {
    const newHighlightRef = firebase.database()
      .ref('highlights')
      .push();

    highlight.id = newHighlightRef.key;
    newHighlightRef.set(highlight);

    dispatch(addHighlightAction(highlight));
  };
}

export function getHighlights() {
  return function (dispatch) {
    firebase.database()
      .ref('highlights')
      .on('value', (highlights) => {
        dispatch(highlightsReceived(highlights));
      });
  }
}
