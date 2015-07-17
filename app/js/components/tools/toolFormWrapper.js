import React from 'react/addons';
import AddToolButton from './addToolButton';
import ToolForm from './toolForm';

let { Component } = React;

// https://facebook.github.io/react/docs/animation.html#getting-started
let TransitionGroup = React.addons.TransitionGroup;

class ToolFormWrapper extends Component {
  constructor() {
    super();

    this.state = {clicked: false};

    // Autobinding/No Autobinding:
    // - https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    // - https://facebook.github.io/react/docs/reusable-components.html#no-autobinding
    this.handleAddToolButtonClick = this.handleAddToolButtonClick.bind(this);
  }

  handleAddToolButtonClick() {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    let form;
    if (this.state.clicked) {
      form = (<ToolForm key={1} />);
    }

    return (
      <div id="tool-form-wrapper">
        <TransitionGroup component="div">
          {form}
        </TransitionGroup>
        <AddToolButton onAddToolButtonClick={this.handleAddToolButtonClick} />
      </div>
    );
  }
}

export default ToolFormWrapper;
