import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { fetchPost } from '../actions/postActions';

class Post extends React.Component {
  render() {
    let cssClass = 'subreddit-post';

    if (this.props.activePostId === this.props.post.id) {
      cssClass += ' is-active';
    }

    return (
      <li className={cssClass} onClick={this.props.loadPost}>{this.props.post.title}</li>
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

export default connect(mapStateToProps, mapDispatchToProps)(Post);
