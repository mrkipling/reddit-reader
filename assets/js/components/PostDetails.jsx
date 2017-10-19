import React from 'react';
import PropTypes from 'prop-types';
import { timeAgo } from '../utils';

class PostDetails extends React.Component {
  render() {
    return (
      <ul className="post-details u-cf">
        <li className="post-details__item post-details__item--votes">{this.props.post.ups}</li>
        <li className="post-details__item post-details__item--time">{timeAgo(this.props.post.created_utc)}</li>
        <li className="post-details__item post-details__item--author">{this.props.post.author.name}</li>
      </ul>
    );
  }
}

PostDetails.propTypes = {
  post: PropTypes.object,
};

export default PostDetails;
