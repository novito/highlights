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

const mapStateToProps = (state) => {
  return {
    highlights: state.highlightsList
  };
}

let Highlights = connect(null, mapDispatchToProps)(HighlightsList);

export default Highlights;
