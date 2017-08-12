const highlights = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HIGHLIGHT':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
        }
      ]
    default:
      return state;

  }
}

export default highlights;
