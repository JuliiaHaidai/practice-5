import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteError } from "../actions/delete-error";

const ErrorLogger = (props) => {
  return (
    <li style={{listStyleType: "none"}}>
      {props.errors.map((error, i)=> <div id={i} className="alert alert-warning" key={i}>{error}
      <button onClick={()=>props.deleteError(i)}>Delete</button>
      </div>)}
    </li>
  )
};

const mapStateToProps = state => ({
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  deleteError: (id) => dispatch(deleteError(id))
});

ErrorLogger.propTypes = {
  deleteError: PropTypes.func.isRequired,
  errors: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(ErrorLogger);