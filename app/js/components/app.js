import React from 'react';
import {RouteHandler} from 'react-router';
import Nav from './nav';
import Footer from './footer';
// @mui: needs withs material-ui
import mui from 'material-ui';

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
        <Nav />
        <div className="content">
          <RouteHandler />
        </div>
        <Footer />
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
