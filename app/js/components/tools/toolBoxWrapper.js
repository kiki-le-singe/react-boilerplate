import React from 'react';
import ToolBox from './toolBox';
import Tool from './services/tool';

const { PropTypes, Component } = React;

class ToolBoxWrapper extends Component {

  // The class' constructor now assumes the role previously filled by componentWillMount
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

  // Understand using React Context:
  // - https://facebook.github.io/react/blog/2014/03/28/the-road-to-1.0.html#context
  // - https://www.tildedave.com/2014/11/15/introduction-to-contexts-in-react-js.html
  getChildContext() {
    return {
      onToolSubmit: this.handleToolSubmit,
      deleteTool: this.deleteTool
    };
  }

  // The ES6 way
  // # Autobinding/No Autobinding:
  // - https://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
  // - https://facebook.github.io/react/docs/reusable-components.html#no-autobinding
  // Here the ES7 way is used. @see React on ES6+ by Steven Lusher: http://babeljs.io/blog/2015/06/07/react-on-es6-plus/
  handleToolSubmit = (tool) => {
    /*let tools = this.state.data;
    // Adds a tool before server return the response to improve the ui experience.
    let newTools = tools.concat([tool]);
    // uses the concat method rather than the push method because it do not change states without to use the setState() method
    this.setState({data: newTools});*/

    // Submit to the server and refresh the list
    Tool.create(tool)
      .then((data) => {
        this.setState({data: data});
      });
  }

  render() {
    return <ToolBox data={this.state.data} />;
  }

  loadToolsFromServer() {
    Tool.fetch()
      .then((data) => {
        this.setState({data: data});
      });
  }

  deleteTool = (id, index) => {
    let newTools = this.state.data;
    newTools.splice(index, 1);
    this.setState({data: newTools});

    Tool.delete(id)
      .then((data) => {
        this.setState({data: data});
      });
  }
}

ToolBoxWrapper.childContextTypes = {
  onToolSubmit: PropTypes.func,
  deleteTool: PropTypes.func
};

ToolBoxWrapper.defaultProps = {initialData: []};

export default ToolBoxWrapper;
