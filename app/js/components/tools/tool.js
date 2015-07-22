import React from 'react';
import { Paper, RaisedButton } from 'material-ui';

let {PropTypes, Component} = React;

class Tool extends Component {
  render() {
    let {logo, url, name, text} = this.props;
    let logoEl;

    if (logo) {
      logoEl = (<img src={logo} alt={name} />);
    } else {
      logoEl = (<div className="tool__no-logo">
        <span>{name}</span>
      </div>);
    }

    return (
      <Paper className="tool" zDepth={2}>
        <Paper className="tool__logo" zDepth={2} circle={true}>
          {logoEl}
        </Paper>
        <div className="tool__info">
          <p>{text}</p>
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
  text: PropTypes.string.isRequired
};

export default Tool;
