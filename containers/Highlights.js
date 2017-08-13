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
    // Figure out why we need to do highlights.highlighstList
    highlights: state.highlights.highlightsList
  };
}

let Highlights = connect(mapStateToProps, mapDispatchToProps)(HighlightsList);

export default Highlights;
