import PropTypes from 'prop-types';
import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Posts.scss';

import { Post } from '../../components';

class Posts extends React.Component {
  render() {
    if (this.props.isLoading) {
      return (
        <div styleName="posts">
          <div className="loading" />
        </div>
      );
    }

    return !this.props.posts.length ? null : (
      <ul styleName="posts">
        {this.props.posts.map(post => <Post key={post.id} post={post} />)}
      </ul>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default CSSModules(Posts, styles);
