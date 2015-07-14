import React from 'react/addons';
import ToolForm from './toolForm';

let {Component, PropTypes} = React;

// https://facebook.github.io/react/docs/animation.html#low-level-api-reacttransitiongroup
// To use ReactTransitionGroup see: http://bl.ocks.org/mattborn/0e4f554713b78c408519
let ReactTransitionGroup = React.addons.TransitionGroup;

class AddToolButton extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({clicked: !this.state.clicked});

    // Communicate between components: https://facebook.github.io/react/tips/communicate-between-components.html
    // Calls the parent method that sends a request to the server
    this.props.onAddToolButtonClick();
  }

  render() {
    return (
      <a className="add-tool-btn" onClick={this.handleClick}>
        <i className="fi-plus"></i>
      </a>
    );
  }
}

AddToolButton.propTypes = {
  onToolSubmit: PropTypes.func.isRequired
};

export default AddToolButton;
