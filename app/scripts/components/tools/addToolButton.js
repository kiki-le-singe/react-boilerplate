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

  render() {
    return (
      <a className="add-tool-btn" onClick={this.handleClick}>
        <i className="fi-plus"></i>
      </a>
    );
  }

  handleClick() {
    let {onToolSubmit} = this.props;

    React.render(
      <ReactTransitionGroup>
        <ToolForm onToolSubmit={onToolSubmit} />
      </ReactTransitionGroup>,
      document.getElementById('tool-form-wrapper')
   );
  }
}

AddToolButton.propTypes = {
  onToolSubmit: PropTypes.func.isRequired
};

export default AddToolButton;
