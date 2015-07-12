import React from 'react';

let {PropTypes, Component} = React;

class Tool extends Component {
  render() {
    let {logo, url, name} = this.props;
    let logoEl;

    if (logo) {
      logoEl = (<img src={logo} alt={name} />);
    } else {
      logoEl = (<div className="tool__no-logo">
        <span>{name}</span>
      </div>);
    }

    return (
      <div className="tool small-12 medium-2 large-2 columns">
        {logoEl}
        <div className="tool__info">
          <a href={url} target="_blank">{name}</a>
        </div>
      </div>
    );
  }
}

Tool.propTypes = {
  logo: PropTypes.string,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Tool;
