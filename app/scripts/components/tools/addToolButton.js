import React from 'react';

class AddToolButton extends React.Component {
  render() {
    return (
      <a className="add-tool-btn" onClick={this.handleClick.bind(this)}>
        <i className="fi-plus"></i>
      </a>
    );
  }

  handleClick() {
  }
}

export default AddToolButton;