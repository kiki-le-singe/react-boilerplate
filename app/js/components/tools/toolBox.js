import React from 'react';
import Tools from './tools';
import ToolFormWrapper from './toolFormWrapper';

let {PropTypes, Component} = React;

class ToolBox extends Component {
  render() {
    let {data, onToolSubmit} = this.props;

    if (data.length) {
      return (
        <div className="tool-box">
          <h1>Tools</h1>
          <Tools data={data} />
          <ToolFormWrapper onToolSubmit={onToolSubmit} />
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
  onToolSubmit: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired
};

export default ToolBox;
