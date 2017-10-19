import PropTypes from 'prop-types';
import React from 'react';

import Comments from './Comments';
import PostDetails from './PostDetails';

class FullPost extends React.Component {
  render() {
    const title = this.props.post.is_self ? (
      <span>{this.props.post.title}</span>
    ) : (
      <a href={this.props.post.url} target="_blank" rel="noopener noreferrer">{this.props.post.title}</a>
    );

    return !this.props.post.comments ? null : (
      <div className="full-post">
        <header className="full-post__header card">
          <h2 className="full-post__header__title">{title}</h2>
          <PostDetails post={this.props.post} />
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
