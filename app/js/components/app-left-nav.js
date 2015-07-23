import React from 'react';
import { MenuItem, LeftNav, Styles } from 'material-ui';

const {PropTypes, Component} = React;
const { Colors, Spacing, Typography } = Styles;
const menuItems = [
  { route: 'hello', text: 'Hello' },
  { route: 'about', text: 'About' },
  { route: 'tools', text: 'Tools' },
  { route: 'my-react-canvas', text: 'My React Canvas' },
  { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
  { type: MenuItem.Types.LINK, payload: 'http://facebook.github.io/react', text: 'React' },
  { type: MenuItem.Types.LINK, payload: 'https://github.com/callemall/material-ui', text: 'GitHub: Material UI' },
  { type: MenuItem.Types.LINK, payload: 'https://www.npmjs.com/package/material-ui', text: 'NPM: Material UI' },
  { type: MenuItem.Types.LINK, payload: 'http://www.getmdl.io/', text: 'MATERIAL DESIGN LITE' },
  { type: MenuItem.Types.LINK, payload: 'https://github.com/google/material-design-icons', text: 'Material icons guide' },
  { type: MenuItem.Types.LINK, payload: 'https://www.google.com/design/spec/material-design/introduction.html', text: 'Material Design' }
];

class AppLeftNav extends Component {
  onLeftNavChange = (e, key, payload) => {
    this.context.router.transitionTo(payload.route);
  }

  onHeaderClick = () => {
    this.context.router.transitionTo('home');
    this.refs.leftNav.close();
  }

  getStyles() {
    return {
      cursor: 'pointer',
      //.mui-font-style-headline
      fontSize: '24px',
      color: Typography.textFullWhite,
      lineHeight: Spacing.desktopKeylineIncrement + 'px',
      fontWeight: Typography.fontWeightLight,
      backgroundColor: Colors.cyan500,
      paddingLeft: Spacing.desktopGutter,
      paddingTop: '0px',
      marginBottom: '8px'
    };
  }

  getSelectedIndex = () => {
    let currentItem;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) {
        return i;
      }
    }
  }

  render() {
    let header = (
      <div style={this.getStyles()} onTouchTap={this.onHeaderClick}>
        React Boilerplate
      </div>
    );

    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        header={header}
        menuItems={menuItems}
        selectedIndex={this.getSelectedIndex()}
        onChange={this.onLeftNavChange} />
    );
  }

  toggle = () => {
    this.refs.leftNav.toggle();
  }
}

AppLeftNav.contextTypes = {
  router: PropTypes.func
};

export default AppLeftNav;
