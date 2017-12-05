import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CSSModules from 'react-css-modules';
import styles from './Post.scss';

import { fetchPost } from '../../actions/postActions';
import { PostDetails } from '../../components';

class Post extends React.Component {
  render() {
    let cssClass = 'card';

    if (this.props.activePostId === this.props.post.id) {
      cssClass += ' is-active';
    }

    return (
      <li styleName="post" className={cssClass} onClick={this.props.loadPost}>
        <h2>{this.props.post.title}</h2>
        <PostDetails post={this.props.post} showPostLength />
      </li>
    );
  }
}

Post.propTypes = {
  post: PropTypes.object,
  activePostId: PropTypes.string,
  loadPost: PropTypes.func,
};

const mapStateToProps = state => ({
  activePostId: state.post ? state.post.id : null,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadPost: () => dispatch(fetchPost(ownProps.post.id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Post, styles));
