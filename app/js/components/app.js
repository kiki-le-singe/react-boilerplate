import React from 'react';
import {RouteHandler} from 'react-router';
import { AppBar, IconButton, Styles } from 'material-ui';

let {PropTypes, Component} = React;

// @mui: needs withs material-ui
const ThemeManager = new mui.Styles.ThemeManager();

class App extends Component {
  // @mui: needs withs material-ui
  // Important! @see http://material-ui.com/#/customization/themes
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  render() {
    return (
      <div>
        <div className="content">
          <RouteHandler />
        </div>
      </div>
    );
  }
}

// @material-ui
// Important! @see http://material-ui.com/#/customization/themes
App.childContextTypes = {
  muiTheme: PropTypes.object
};

export default App;
