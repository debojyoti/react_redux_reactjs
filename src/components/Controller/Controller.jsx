import React, { Component } from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../../store/actions/index";

class Controller extends Component {
  state = {};
  handleDecrement = () => {
    this.props.decrement();
  };
  handleIncrement = () => {
    this.props.increment();
  };
  render() {
    return (
      <React.Fragment>
        <button onClick={() => this.handleDecrement()}>Decrement</button>
        <button onClick={() => this.handleIncrement()}>Increment</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controller);
