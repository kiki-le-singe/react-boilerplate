import React from 'react';
import {RouteHandler} from 'react-router';
import { AppBar, IconButton, Styles } from 'material-ui';
import AppLeftNav from './app-left-nav';

const {PropTypes, Component} = React;
// @mui: needs withs material-ui - important
const ThemeManager = new Styles.ThemeManager();

class App extends Component {
  // @mui: needs withs material-ui - important
  getChildContext() {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    };
  }

  onLeftIconButtonTouchTap = () => {
    this.refs.leftNav.toggle();
  }

  render() {
    let title =
      this.context.router.isActive('hello') ? 'Hello' :
      this.context.router.isActive('about') ? 'About' :
      this.context.router.isActive('my-react-canvas') ? 'My React Canvas' :
      this.context.router.isActive('tools') ? 'Tools' : '';

    let githubButton = (
      <IconButton
        iconClassName="fa fa-github"
        tooltipPosition="bottom-left"
        tooltip="Kiki's React Boilerplate"
        href="https://github.com/kiki-le-singe/react-boilerplate"
        linkButton={true} />
    );

    return (
      <div>
        <AppBar
          onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
          title={title}
          zDepth={0}
          iconElementRight={githubButton} />
        <AppLeftNav ref="leftNav" />
        <div className="content">
          <RouteHandler />
        </div>
      </div>
    );
  }
}

App.contextTypes = {
  router: PropTypes.func
};

// @mui: needs withs material-ui - important
App.childContextTypes = {
  muiTheme: PropTypes.object
};

export default App;
