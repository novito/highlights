const initialState = {
  highlightsList: [],
  newHighlight: null
}
const highlights = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_HIGHLIGHT':
      return state;
    case 'RECEIVED_HIGHLIGHTS': {
      return {
        ...state,
        highlightsList: action.highlights
      }
    }
    default:
      return state;
  }
}

export default highlights;
