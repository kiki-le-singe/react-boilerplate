import React from 'react';
import ToolBox from './toolBox';

let ToolBoxWrapper = React.createClass({
  render() {
    return (
      <ToolBox url="api/tools" />
    );
  }
});

export default ToolBoxWrapper;
