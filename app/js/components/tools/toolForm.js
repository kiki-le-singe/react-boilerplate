import React from 'react';
import $ from 'jquery';

let {PropTypes, Component, findDOMNode} = React;

class ToolForm extends Component {
  constructor() {
    super();

    // Autobinding/No Autobinding:
    // - https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    // - https://facebook.github.io/react/docs/reusable-components.html#no-autobinding
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillEnter(callback) {
    this.el = this.refs.form.getDOMNode();
    this.$el = $(this.el);

    this.$el.addClass('tool-form-enter');
    setTimeout(callback, 1); // need at least one tick to fire transition
  }

  componentDidEnter() {
    this.$el.addClass('tool-form-enter-active');
  }

  componentWillLeave(callback) {
    this.$el
      .removeClass('tool-form-enter tool-form-enter-active')
      .addClass('tool-form-leave tool-form-leave-active')
      .one('webkitTransitionEnd', () => {
        callback();
      });
  }

  componentDidLeave() {
    this.$el.removeClass('tool-form-leave tool-form-leave-active');
  }

  handleSubmit(e) {
    e.preventDefault();

    let name = findDOMNode(this.refs.name).value.trim();
    let url = findDOMNode(this.refs.url).value.trim();
    if (!name && !url) {
      return;
    }

    // Calls the parent method passed by context that sends a request to the server
    this.context.onToolSubmit({name: name, url: url});
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

ToolForm.contextTypes = {
  onToolSubmit: PropTypes.func
};

export default ToolForm;
