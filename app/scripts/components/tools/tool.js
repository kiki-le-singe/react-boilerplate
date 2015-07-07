import React from 'react';

let Tool = React.createClass({
  propTypes: {
      logo: React.PropTypes.string,
      url: React.PropTypes.string.isRequired,
      name: React.PropTypes.string.isRequired
  },

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
});

export default Tool;
