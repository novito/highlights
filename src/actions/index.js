import firebase from '../firebase';

const addHighlightAction = (highlight) => ({
  type: 'ADD_HIGHLIGHT',
  ...highlight
});

const highlightReceived = (highlight) => ({
    type: 'RECEIVED_HIGHLIGHT',
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

function receiveHighlights(highlights) {
  return function (dispatch) {
    Object.values(highlights).forEach(function(highlight) {
      dispatch(highlightReceived(highlight));
    });
  }
}

export function getHighlights() {
  return function (dispatch) {
    firebase.database()
      .ref('highlights')
      .on('value', (highlights) => {
        console.log("HIGHLIGHTS");
        console.log(highlights);
      });
    // TODO: Dispatch action saying that we have started to fetch
  }
}
