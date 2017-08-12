import firebase from '../firebase';

const addHighlightAction = (highlight) => ({
  type: 'ADD_HIGHLIGHT',
  ...highlight
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
    highlight.test = "TESTOUNTUNE";
    newHighlightRef.set(highlight);

    dispatch(addHighlightAction(highlight));
  };
}
