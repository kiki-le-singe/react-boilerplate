import React from 'react';

let {PropTypes, Component, findDOMNode} = React;

class ToolForm extends Component {
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

    let title = findDOMNode(this.refs.title).value.trim();
    if (!title) {
      return;
    }

    // TODO: send request to the server
    React.findDOMNode(this.refs.title).value = '';
    findDOMNode(this.refs.title).value = '';
  }
}

ToolForm.propTypes = {
  onToolSubmit: PropTypes.func.isRequired
};

export default ToolForm;
