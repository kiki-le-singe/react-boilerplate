import $ from 'jquery';
import React from 'react';
import ToolBox from './toolBox';

class ToolBoxWrapper extends React.Component {
  constructor(props) {
    super(props);

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
    return <ToolBox data={this.state.data} />;
  }

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
}

ToolBoxWrapper.defaultProps = {initialData: []};

export default ToolBoxWrapper;
