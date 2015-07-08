import React from 'react/addons';
import Tool from './tool';

// https://facebook.github.io/react/docs/animation.html#getting-started
let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// Note:
// When using ReactCSSTransitionGroup, there's no way for your components to be notified
// when a transition has ended or to perform any more complex logic around animation.
// If you want more fine-grained control, you can use the lower-level ReactTransitionGroup
// API which provides the hooks you need to do custom transitions.

// To use ReactTransitionGroup see: http://bl.ocks.org/mattborn/0e4f554713b78c408519
// let ReactTransitionGroup = React.addons.TransitionGroup;

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
          <ReactCSSTransitionGroup transitionName="example" transitionAppear={true}>
            {toolNodes}
          </ReactCSSTransitionGroup>
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
