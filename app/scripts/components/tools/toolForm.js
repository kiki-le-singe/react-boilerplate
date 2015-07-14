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

  componentWillAppear(callback) {
    let el = this.refs.form.getDOMNode();
    el.className = el.className + ' tool-form-appear';
    setTimeout(callback, 1); // need at least one tick to fire transition
  }

  componentDidAppear() {
    let el = this.refs.form.getDOMNode();
    el.className = el.className + ' tool-form-appear-active';
  handleSubmit(e) {
    e.preventDefault();

    let name = findDOMNode(this.refs.name).value.trim();
    let url = findDOMNode(this.refs.url).value.trim();
    if (!name && !url) {
      return;
    }

    // Communicate between components: https://facebook.github.io/react/tips/communicate-between-components.html
    // Calls the parent method that sends a request to the server
    this.props.onToolSubmit({name: name, url: url});
    findDOMNode(this.refs.name).value = '';
    findDOMNode(this.refs.url).value = '';
  }

  render() {
    return (
      <form className="tool-form" onSubmit={this.handleSubmit} ref="form">
        <div className="row">
          <div className="columns">
            <div className="row">
              <div className="columns">
                <input type="text" placeholder="Name" ref="name" />
              </div>
            </div>
            <div className="row">
              <div className="columns">
                <input type="text" placeholder="Url" ref="url" />
              </div>
            </div>
            <div className="row">
              <div className="columns">
                <input type="submit" value="Post" className="button small radius" />
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

ToolForm.propTypes = {
  onToolSubmit: PropTypes.func.isRequired
};

export default ToolForm;
