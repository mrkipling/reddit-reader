import PropTypes from 'prop-types';
import React from 'react';

import Subreddit from './Subreddit';

class Subreddits extends React.Component {
  render() {
    return (
      <ul className="subreddits">
        {this.props.subreddits.map(subreddit =>
          <Subreddit key={subreddit.id} subreddit={subreddit} />)}
      </ul>
    );
  }
}

Subreddits.propTypes = {
  subreddits: PropTypes.array,
};

export default Subreddits;
