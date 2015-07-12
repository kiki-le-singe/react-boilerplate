import $ from 'jquery';
import React from 'react';
import ToolBox from './toolBox';
import api from './config/api.json';

class ToolBoxWrapper extends React.Component {
  constructor(props) {
    super(props);

    // Autobinding/No Autobinding:
    // - https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    // - https://facebook.github.io/react/docs/reusable-components.html#no-autobinding
    this.handleToolSubmit = this.handleToolSubmit.bind(this);

    // Warning: getInitialState() is only supported for classes created using React.createClass.
    // getInitialState() executes exactly once during the lifecycle of the component
    // and sets up the initial state of the component.
    // When the state updates, the component re-renders itself.
    // @see https://facebook.github.io/react/docs/tutorial.html#reactive-state
    // getInitialState() {
    //   return {data: []};
    // }
    this.state = {data: props.initialData};
  }

  // componentDidMount is a method called automatically by React when a component is rendered
  componentDidMount() {
    this.loadToolsFromServer();
  }

  render() {
    return <ToolBox data={this.state.data} onToolSubmit={this.handleToolSubmit} />;
  }

  loadToolsFromServer() {
    $.ajax({
      url: api.tools,
      dataType: 'json',
      cache: false,
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(api.tools, status, err.toString()); // eslint-disable-line
      }
    });
  }

  handleToolSubmit(tool) {
    // Submit to the server and refresh the list
    $.ajax({
      url: api.tools,
      dataType: 'json',
      type: 'POST',
      data: tool,
      success: (data) => {
        this.setState({data: data});
      },
      error: (xhr, status, err) => {
        console.error(api.tools, status, err.toString()); // eslint-disable-line
      }
    });
  }
}

ToolBoxWrapper.defaultProps = {initialData: []};

export default ToolBoxWrapper;
