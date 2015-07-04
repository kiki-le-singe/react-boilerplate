import $ from 'jquery';
import React from 'react';
import Tools from './tools';
import ToolForm from './toolForm';

let ToolBox = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired
  },

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
    if (this.state.data.length) {
      return (
        <div className="tools row">
          <div className="small-12 medium-12 large-12 columns">
            <h1>Tools</h1>
            <Tools data={this.state.data} />
            <ToolForm />
          </div>
        </div>
      );
    }
    return (
      <div className="tools row">
        <div className="small-12 medium-12 large-12 columns">
          <h1>Tools</h1>
          <p>tools.empty</p>
        </div>
      </div>
    );
  },

  loadToolsFromServer() {
    $.ajax({
      url: this.props.url,
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

export default ToolBox;
