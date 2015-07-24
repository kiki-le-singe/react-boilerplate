import React from 'react';
import { Paper, RaisedButton } from 'material-ui';

const {PropTypes, Component} = React;

class Tool extends Component {
  render() {
    const {logo, url, name, desc} = this.props;
    let logoEl;

    if (logo) {
      logoEl = (<img src={logo} alt={name} />);
    } else {
      logoEl = (<div className="tool__no-logo">
        <span>{name}</span>
      </div>);
    }

    return (
      <Paper className="tool" zDepth={2} transitionEnabled={false}>
        <div className="logo--wrapper">
          <Paper className="tool__logo" zDepth={2} circle={true} transitionEnabled={false}>
            {logoEl}
          </Paper>
        </div>
        <div className="tool--info">
          <p>{desc}</p>
        </div>
        <div className="tool--actions">
          <RaisedButton label={name} linkButton={true} secondary={true} href={url} target="_blank" />
        </div>
      </Paper>
    );
  }
}

Tool.propTypes = {
  logo: PropTypes.string,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired
};

export default Tool;
