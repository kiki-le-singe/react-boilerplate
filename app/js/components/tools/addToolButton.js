import React from 'react/addons';

const {Component, PropTypes} = React;

class AddToolButton extends Component {
  constructor() {
    super();

    this.state = {clicked: false};
  }

  handleClick = () => {
    this.setState({clicked: !this.state.clicked});

    // Communicate between components: https://facebook.github.io/react/tips/communicate-between-components.html
    // Calls the parent method that sends a request to the server
    this.props.onAddToolButtonClick();
  }

  render() {
    let icon = this.state.clicked ? <i className="fi-x"></i> : <i className="fi-plus"></i>;

    return (
      <a className="add-tool-btn" onClick={this.handleClick}>
        {icon}
      </a>
    );
  }
}

AddToolButton.propTypes = {
  onAddToolButtonClick: PropTypes.func.isRequired
};

export default AddToolButton;
