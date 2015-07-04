import React from 'react';

let Tool = React.createClass({
  propTypes: {
      url: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <li className="tool">
        <a href={this.props.url} target="_blank">{this.props.name}</a>
      </li>
    );
  }
});

export default Tool;
