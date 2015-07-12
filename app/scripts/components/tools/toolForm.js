import React from 'react';

let {PropTypes, Component, findDOMNode} = React;

class ToolForm extends Component {
  constructor() {
    super();

    // Autobinding/No Autobinding:
    // - https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    // - https://facebook.github.io/react/docs/reusable-components.html#no-autobinding
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form className="tool-form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Name" ref="name" />
        <input type="submit" value="Post" />
      </form>
    );
  }

  handleSubmit(e) {
    e.preventDefault();

    let name = findDOMNode(this.refs.name).value.trim();
    if (!name) {
      return;
    }

    // Communicate between components: https://facebook.github.io/react/tips/communicate-between-components.html
    // Calls the parent method that sends a request to the server
    this.props.onToolSubmit({name: name});
    findDOMNode(this.refs.name).value = '';
  }
}

ToolForm.propTypes = {
  onToolSubmit: PropTypes.func.isRequired
};

export default ToolForm;
