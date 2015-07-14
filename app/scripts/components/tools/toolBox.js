import React from 'react';
import Tools from './tools';
import AddToolButton from './addToolButton';

let {PropTypes, Component} = React;

class ToolBox extends Component {
  render() {
    let {data, onToolSubmit} = this.props;

    if (data.length) {
      return (
        <div className="tool-box">
          <h1>Tools</h1>
          <Tools data={data} />
          <AddToolButton onToolSubmit={onToolSubmit} />
          <div id="tool-form-wrapper"></div>
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
