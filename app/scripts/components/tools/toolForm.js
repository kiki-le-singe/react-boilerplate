import React from 'react';

class ToolForm extends React.Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="tool-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Title" ref="title" />
        <input type="submit" value="Post" />
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    let title = React.findDOMNode(this.refs.title).value.trim();
    if (!title) {
      return;
    }

    // TODO: send request to the server
    React.findDOMNode(this.refs.title).value = '';
  }
}

export default ToolForm;
