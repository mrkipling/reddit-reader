import PropTypes from 'prop-types';
import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Subreddits.scss';

import Subreddit from './Subreddit';

class Subreddits extends React.Component {
  render() {
    return (
      <ul styleName="subreddits">
        {this.props.subreddits.map(subreddit =>
          <Subreddit key={subreddit.id} subreddit={subreddit} />)}
      </ul>
    );
  }
}

Subreddits.propTypes = {
  subreddits: PropTypes.array,
};

export default CSSModules(Subreddits, styles);
