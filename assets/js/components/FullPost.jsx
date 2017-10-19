import PropTypes from 'prop-types';
import React from 'react';

import { plural, timeAgo } from '../utils';
import Comments from './Comments';

class FullPost extends React.Component {
  render() {
    const score = this.props.post.score;

    return !this.props.post.comments ? null : (
      <div className="full-post">
        <header className="full-post__header">
          <h2 className="full-post__header__title">{this.props.post.title}</h2>
          <p className="full-post__header__details">
            Posted
            <span className="full-post__header__details__time"> {timeAgo(this.props.post.created_utc)} </span>
            by
            <span className="full-post__header__details__user"> {this.props.post.author.name} </span>
            with
            <span className="full-post__header__details__votes">{' ' + score + ' ' + plural(score, ['vote', 'votes'])}</span>
          </p>
          <div className="full-post__header__text usertext" dangerouslySetInnerHTML={{ __html: this.props.post.selftext_html }} />
        </header>
        <Comments comments={this.props.post.comments} />
      </div>
    );
  }
}

FullPost.propTypes = {
  post: PropTypes.object,
};

export default FullPost;
