import PropTypes from 'prop-types';
import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Subreddits.scss';

import Subreddit from './Subreddit';

class Subreddits extends React.Component {
  render() {
    if (this.props.isLoading) {
      return (
        <div styleName="subreddits">
          <div className="loading" />
        </div>
      );
    }

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
  isLoading: PropTypes.bool,
};

export default CSSModules(Subreddits, styles);
