import firebase from '../firebase';

const addHighlightAction = (highlight) => ({
  type: 'ADD_HIGHLIGHT',
  ...highlight
});

export function addHighlight(text) {
  let highlight = {
    text: text,
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
