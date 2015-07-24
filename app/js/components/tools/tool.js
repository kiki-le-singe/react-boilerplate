import React from 'react';
import { Paper } from 'material-ui';

const {PropTypes, Component} = React;

class Tool extends Component {
  handleClick = (e) => {
    console.log(e.currentTarget.className, ': Coming soon...'); // eslint-disable-line
  }

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
          <a href={url} target="_blank">
            <i className="fa fa-link"></i>{name}
          </a>
        </div>
        <button type="button" className="tool__edit action" onClick={this.handleClick}>
          <i className="fa fa-pencil"></i>
        </button>
        <button type="button" className="tool__remove action" onClick={this.handleClick}>
          <i className="fa fa-trash-o"></i>
        </button>
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
