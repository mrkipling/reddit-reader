import PropTypes from 'prop-types';
import React from 'react';

class AppHeader extends React.Component {
  render() {
    return (
      <header className="subreddit-header">
        <h1 className="subreddit-header__name">{'Subreddit: ' + this.props.name}</h1>
      </header>
    );
  }
}

AppHeader.propTypes = {
  name: PropTypes.string,
};

export default AppHeader;
