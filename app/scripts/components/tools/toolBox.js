import React from 'react';
import Tools from './tools';
import ToolForm from './toolForm';
import AddToolButton from './addToolButton';

let {PropTypes, Component} = React;

class ToolBox extends Component {
  render() {
    let {data} = this.props;

    if (data.length) {
      return (
        <div className="tool-box">
          <h1>Tools</h1>
          <Tools data={data} />
          <ToolForm />
          <AddToolButton />
        </div>
      );
    }
    return (
      <div className="tool-box-empty">
        <h1>Tools</h1>
        <p>tools.empty</p>
      </div>
    );
  }
}

ToolBox.propTypes = {
  data: PropTypes.array.isRequired
};

export default ToolBox;
