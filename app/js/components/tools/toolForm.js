import React from 'react';
import $ from 'jquery';

const {PropTypes, Component, findDOMNode} = React;

class ToolForm extends Component {

  constructor() {
    super();

    // Add fake Id. The Tool component needs it as props. @see: Tools component - line 23
    this.state = {id: 16};
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

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({id: this.state.id + 1}); // update fake id. @see this.constructor

    let name = findDOMNode(this.refs.name).value.trim();
    let url = findDOMNode(this.refs.url).value.trim();
    if (!name && !url) {
      return;
    }

    // Calls the parent method passed by context that sends a request to the server
    this.context.onToolSubmit({id: this.state.id, name: name, url: url});
    findDOMNode(this.refs.name).value = '';
    findDOMNode(this.refs.url).value = '';
  }

  render() {
    return (
      <form className="tool-form" onSubmit={this.handleSubmit} ref="form">
        <div>
          <input type="text" placeholder="Name" ref="name" />
        </div>
        <div>
          <input type="text" placeholder="Url" ref="url" />
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
