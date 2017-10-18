import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { changeSubreddit } from '../actions/activeSubredditActions';

class Subreddit extends React.Component {
  render() {
    let cssClass = 'subreddits__subreddit';

    if (this.props.activeSubreddit === this.props.subreddit.display_name) {
      cssClass += ' is-active';
    }

    return (
      <li
        onClick={() => this.props.loadSubreddit(this.props.subreddit.display_name)}
        className={cssClass}
      >
        {this.props.subreddit.display_name_prefixed}
      </li>
    );
  }
}

Subreddit.propTypes = {
  activeSubreddit: PropTypes.string,
  loadSubreddit: PropTypes.func,
  subreddit: PropTypes.object,
};

const mapStateToProps = state => ({
  activeSubreddit: state.activeSubreddit,
});

const mapDispatchToProps = dispatch => ({
  loadSubreddit: subreddit =>
    dispatch(changeSubreddit(subreddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subreddit);
