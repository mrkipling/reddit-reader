import PropTypes from 'prop-types';
import React from 'react';

import Post from './Post';

class Posts extends React.Component {
  render() {
    return (
      <ul className="subreddit-posts">
        {this.props.posts.map(post => <Post key={post.id} post={post} />)}
      </ul>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array,
};

export default Posts;
