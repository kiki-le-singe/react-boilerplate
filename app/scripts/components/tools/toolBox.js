import React from 'react';
import Tools from './tools';
import ToolForm from './toolForm';
import AddToolButton from './addToolButton';

let ToolBox = React.createClass({
  propTypes: {
    data: React.PropTypes.array.isRequired
  },

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
});

export default ToolBox;
