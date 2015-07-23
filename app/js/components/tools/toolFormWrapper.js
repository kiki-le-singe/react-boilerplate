import React from 'react/addons';
import AddToolButton from './addToolButton';
import ToolForm from './toolForm';

const { Component } = React;

// https://facebook.github.io/react/docs/animation.html#getting-started
const TransitionGroup = React.addons.TransitionGroup;

class ToolFormWrapper extends Component {
  constructor() {
    super();

    this.state = {clicked: false};
  }

  handleAddToolButtonClick = () => {
    this.setState({clicked: !this.state.clicked});
  }

  render() {
    let form;
    if (this.state.clicked) { // toggle form on click
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
