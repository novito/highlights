const initialState = {
  highlightsList: [],
  newHighlight: null
}
const highlights = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HIGHLIGHT':
      return state;
    case 'RECEIVED_HIGHLIGHTS': {
      let toReturn = {
        ...state,
        highlightsList: action.highlights
      }

      return toReturn;
    }
    default:
      return state;
  }
}

export default highlights;
