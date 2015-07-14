import React from 'react/addons';

let {Component, PropTypes} = React;

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
  onAddToolButtonClick: PropTypes.func.isRequired
};

export default AddToolButton;
