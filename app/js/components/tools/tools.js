import React from 'react/addons';
import Tool from './tool';

const {PropTypes, Component} = React;

// https://facebook.github.io/react/docs/animation.html#getting-started
const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

// Note:
// When using ReactCSSTransitionGroup, there's no way for your components to be notified
// when a transition has ended or to perform any more complex logic around animation.
// If you want more fine-grained control, you can use the lower-level ReactTransitionGroup
// API which provides the hooks you need to do custom transitions.

// To use ReactTransitionGroup see: http://bl.ocks.org/mattborn/0e4f554713b78c408519
// const ReactTransitionGroup = React.addons.TransitionGroup;

class Tools extends Component {
  render() {
    const {data} = this.props;
    let toolNodes = data.map((tool, index) => {
      return (
        <Tool index={index} id={tool.id} url={tool.url} name={tool.name} logo={tool.logo} desc={tool.desc} key={tool.id} />
      );
    });

    return (
      <section className="tools">
        <p>tools.you.now.have</p>
        <div className="tools__list">
          <ReactCSSTransitionGroup transitionName="tool" transitionAppear={true}>
            {toolNodes}
          </ReactCSSTransitionGroup>
        </div>
        <p>tools.installed</p>
        <p>tools.enjoy.coding</p>
      </section>
    );
  }
}

Tools.propTypes = {
  data: PropTypes.array.isRequired
};

export default Tools;
