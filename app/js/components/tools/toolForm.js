import React from 'react';
import $ from 'jquery';
import uniqid from 'uniqid';
import { TextField } from 'material-ui';

const {PropTypes, Component, findDOMNode} = React;

class ToolForm extends Component {

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

  handleSubmit = (e) => {
    e.preventDefault();

    let nameEl = this.refs.name;
    let urlEl = this.refs.url;
    let name = nameEl.getValue().trim();
    let url = urlEl.getValue().trim();

    if (!name && !url) {
      return;
    }

    // Calls the parent method passed by context that sends a request to the server
    this.context.onToolSubmit({id: uniqid(), name: name, url: url});
    nameEl.clearValue();
    urlEl.clearValue();
  }

  render() {
    return (
      <form className="tool-form" onSubmit={this.handleSubmit} ref="form">
        <div>
          <TextField floatingLabelText="Name" ref="name" />
        </div>
        <div>
          <TextField floatingLabelText="Url" ref="url" />
        </div>
        <div>
          <input type="submit" value="Post" className="button small radius" />
        </div>
      </form>
    );
  }
}

ToolForm.contextTypes = {
  onToolSubmit: PropTypes.func
};

export default ToolForm;
