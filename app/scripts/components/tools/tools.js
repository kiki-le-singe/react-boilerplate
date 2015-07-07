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
        <Tool url={tool.url} name={tool.name} logo={tool.logo} key={index} />
      );
    });

    return (
      <div className="tool-list-wrapper">
        <div className="row">
          <div className="columns text-center">tools.you.now.have</div>
        </div>
        <div className="tool-list row">
          {toolNodes}
        </div>
        <div className="row">
          <div className="columns text-center">tools.installed</div>
        </div>
        <div className="row">
          <div className="columns text-center">tools.enjoy.coding</div>
        </div>
      </div>
    );
  }
});

export default Tools;
