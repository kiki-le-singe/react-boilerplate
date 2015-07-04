import React from 'react';
import Tool from './tool';

let Tools = React.createClass({
  propTypes: {
      data: React.PropTypes.array.isRequired
  },

  render() {
    let {data} = this.props;
    let toolNodes = data.map((tool, index) => {
      return (
        <Tool url={tool.url} name={tool.name} key={index} />
      );
    });

    return (
      <div className="tool-list">
        <p>tools.you.now.have</p>
        <ul className="list">
          {toolNodes}
        </ul>
        <p>tools.installed</p>
        <p>tools.enjoy.coding</p>
      </div>
    );
  }
});

export default Tools;
