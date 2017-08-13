import { connect } from 'react-redux';
import { getHighlights } from '../src/actions/index';
import HighlightsList from '../components/HighlightsList';

const mapDispatchToProps = (dispatch) => {
  return {
    getHighlights: () => {
      dispatch(getHighlights());
    }
  }
}

let Highlights = connect(null, mapDispatchToProps)(HighlightsList);

export default Highlights;
