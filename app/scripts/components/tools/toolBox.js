import React from 'react';
import Tools from './tools';
import ToolForm from './toolForm';

let ToolBox = React.createClass({
  getData() {
    let data = [
      {name: 'React', url: 'https://facebook.github.io/react/index.html'},
      {name: 'Babel', url: 'https://babeljs.io/'}
    ];
    return data;
  },

  render() {
    return (
      <div className="tools row">
        <div className="small-12 medium-12 large-12 columns">
          <h1>Tools</h1>
          <Tools data={this.getData()} />
          <ToolForm />
        </div>
      </div>
    );
  }
});

export default ToolBox;
