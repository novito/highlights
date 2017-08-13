import { connect } from 'react-redux';
import { getHighlights } from '../src/actions/highlights';
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
    highlights: state.highlights.list
  };
}

let Highlights = connect(mapStateToProps, mapDispatchToProps)(HighlightsList);

export default Highlights;
