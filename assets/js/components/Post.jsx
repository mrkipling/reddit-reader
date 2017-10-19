import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { timeAgo } from '../utils';

import { fetchPost } from '../actions/postActions';

class Post extends React.Component {
  render() {
    let cssClass = 'subreddit-post';

    if (this.props.activePostId === this.props.post.id) {
      cssClass += ' is-active';
    }

    return (
      <li className={cssClass} onClick={this.props.loadPost}>
        <h2 className="subreddit-post__title">{this.props.post.title}</h2>
        <div className="subreddit-post__details u-cf">
          <ul className="subreddit-post__info">
            <li className="subreddit-post__info__votes">{this.props.post.ups}</li>
            <li className="subreddit-post__info__time">{timeAgo(this.props.post.created_utc)}</li>
            <li className="subreddit-post__info__author">{this.props.post.author.name}</li>
          </ul>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Post);
