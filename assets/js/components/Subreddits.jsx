import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { fetchSubreddit } from '../actions/subredditActions';

class Subreddits extends React.Component {
  render() {
    return (
      <ul className="subreddits">
        {this.props.subreddits.map(subreddit =>
          <li
            key={subreddit.id}
            onClick={() => this.props.loadSubreddit(subreddit)}
            className="subreddits__subreddit"
          >
            {subreddit.display_name_prefixed}
          </li>)}
      </ul>
    );
  }
}

Subreddits.propTypes = {
  subreddits: PropTypes.array,
  loadSubreddit: PropTypes.func,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  loadSubreddit: subreddit =>
    dispatch(fetchSubreddit(subreddit.display_name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Subreddits);
