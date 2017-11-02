import React from 'react';
import PropTypes from 'prop-types';
import { timeAgo, formatNumber } from '../utils';

class PostDetails extends React.Component {
  render() {
    const score = !this.props.hideScore ? (
      <li className="post-details__item post-details__item--votes">{formatNumber(this.props.post.score)}</li>
    ) : null;

    return (
      <ul className="post-details u-cf">
        {score}
        <li className="post-details__item post-details__item--comments">{formatNumber(this.props.post.num_comments)}</li>
        <li className="post-details__item post-details__item--time">
          <a href={'https://www.reddit.com' + this.props.post.permalink} target="_blank" rel="noopener noreferrer">
            {timeAgo(this.props.post.created_utc)}
          </a>
        </li>
        <li className="post-details__item post-details__item--author">
          <a href={'https://www.reddit.com/u/' + this.props.post.author.name} target="_blank" rel="noopener noreferrer">{this.props.post.author.name}</a>
        </li>
      </ul>
    );
  }
}

PostDetails.propTypes = {
  post: PropTypes.object,
  hideScore: PropTypes.bool,
};

export default PostDetails;
