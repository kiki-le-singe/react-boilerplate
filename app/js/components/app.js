import React from 'react';
import {RouteHandler} from 'react-router';
import { AppBar, IconButton, Styles } from 'material-ui';
import AppLeftNav from './app-left-nav';

let {PropTypes, Component} = React;
// @mui: needs withs material-ui - important
let ThemeManager = new Styles.ThemeManager();

class App extends Component {
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div>
        <AppLeftNav ref="leftNav" />
        <div className="content">
          <RouteHandler />
        </div>
      </div>
    );
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object
};

export default App;
