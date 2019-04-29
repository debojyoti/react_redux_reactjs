import React, { Component } from "react";
import { connect } from "react-redux";

class Display extends Component {
  state = {};
  render() {
    return <h6>Current value: {this.props.counter}</h6>;
  }
}

const mapStateToProps = state => {
  return {
    counter: state.modifier.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
