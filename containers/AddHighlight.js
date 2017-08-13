import AddHighlightForm from '../components/AddHighlightForm';
import { connect } from 'react-redux';
import { addHighlight } from '../src/actions/highlights';

const mapDispatchToProps = (dispatch) => {
  return {
    addHighlight: (text, date) => {
      dispatch(addHighlight(text, date));
    }
  };
};

let AddHighlight = connect(null, mapDispatchToProps)(AddHighlightForm);

export default AddHighlight;
