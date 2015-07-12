import React from 'react';

class AddToolButton extends React.Component {
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
  }
}

export default AddToolButton;
