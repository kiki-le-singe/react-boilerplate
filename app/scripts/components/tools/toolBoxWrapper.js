import $ from 'jquery';
import React from 'react';
import ToolBox from './toolBox';

let ToolBoxWrapper = React.createClass({
  // componentDidMount is a method called automatically by React when a component is rendered
  componentDidMount() {
    this.loadToolsFromServer();
  },

  // getInitialState() executes exactly once during the lifecycle of the component
  // and sets up the initial state of the component.
  // When the state updates, the component re-renders itself.
  // @see https://facebook.github.io/react/docs/tutorial.html#reactive-state
  getInitialState() {
    return {data: []};
  },

  render() {
    return <ToolBox data={this.state.data} />;
  },

  loadToolsFromServer() {
    $.ajax({
      url: 'api/tools',
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(this.props.url, status, err.toString()); // eslint-disable-line
      }
    });
  }
});

export default ToolBoxWrapper;
