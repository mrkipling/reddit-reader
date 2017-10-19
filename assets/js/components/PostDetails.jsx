import React from 'react';
import PropTypes from 'prop-types';
import { timeAgo } from '../utils';

class PostDetails extends React.Component {
  render() {
    const permalink = this.props.showPermalink ? (
      <li className="post-details__item post-details__item--permalink">
        <a href={'https://www.reddit.com' + this.props.post.permalink} target="_blank" rel="noopener noreferrer">Permalink</a>
      </li>
    ) : null;

    return (
      <ul className="post-details u-cf">
        <li className="post-details__item post-details__item--votes">{this.props.post.ups}</li>
        <li className="post-details__item post-details__item--time">{timeAgo(this.props.post.created_utc)}</li>
        <li className="post-details__item post-details__item--author">{this.props.post.author.name}</li>
        {permalink}
      </ul>
    );
  }
}

PostDetails.propTypes = {
  post: PropTypes.object,
  showPermalink: PropTypes.boolean,
};

export default PostDetails;
