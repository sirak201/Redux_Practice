import { connect } from "react-redux";
import { setVisbilityFilter } from "../redux/actions/todoAction";
import Link from "./Link";

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFiliter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisbilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
