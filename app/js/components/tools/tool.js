import React from 'react';
import { Paper } from 'material-ui';

const {PropTypes, Component} = React;

class Tool extends Component {
  handleClick = (e) => {
    console.log(e.currentTarget.className, ': Coming soon...'); // eslint-disable-line
  }

  handleDelete = () => {
    const { id, index } = this.props;
    this.context.deleteTool(id, index);
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
        <button type="button" className="tool__remove action" onClick={this.handleDelete}>
          <i className="fa fa-trash-o"></i>
        </button>
      </Paper>
    );
  }
}

Tool.propTypes = {
  id: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  logo: PropTypes.string,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string
};

Tool.contextTypes = {
  deleteTool: PropTypes.func
};

export default Tool;
