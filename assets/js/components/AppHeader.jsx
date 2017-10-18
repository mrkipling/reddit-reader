import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { changeSubreddit } from '../actions/activeSubredditActions';

class AppHeader extends React.Component {
  render() {
    return (
      <header className="subreddit-header">
        <h1 className="subreddit-header__name" onClick={this.props.askChangeSubreddit}>{'Subreddit: ' + this.props.activeSubreddit}</h1>
      </header>
    );
  }
}

AppHeader.propTypes = {
  activeSubreddit: PropTypes.string,
  askChangeSubreddit: PropTypes.func,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  askChangeSubreddit: () => {
    const subreddit = window.prompt('Which subreddit would you like to view?');
    dispatch(changeSubreddit(subreddit));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
