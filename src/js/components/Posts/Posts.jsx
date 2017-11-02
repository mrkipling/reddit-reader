import PropTypes from 'prop-types';
import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './Posts.scss';

import { Post } from '../../components';

class Posts extends React.Component {
  render() {
    return !this.props.posts.length ? null : (
      <ul styleName="posts">
        {this.props.posts.map(post => <Post key={post.id} post={post} />)}
      </ul>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.array,
};

export default CSSModules(Posts, styles);
