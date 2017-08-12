import AddHighlightForm from '../components/AddHighlightForm';
import { connect } from 'react-redux';
import { addHighlight } from '../src/actions/index';

const mapDispatchToProps = (dispatch) => {
  return {
    addHighlight: (text) => {
      dispatch(addHighlight(text));
    }
  };
};

let AddHighlight = connect(null, mapDispatchToProps)(AddHighlightForm);

export default AddHighlight;
