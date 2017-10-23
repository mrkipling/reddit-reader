import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { voteComment } from '../actions/votesActions';
import { formatNumber } from '../utils';

import Comments from './Comments';
import PostDetails from './PostDetails';
import PostMedia from './PostMedia';

class FullPost extends React.Component {
  render() {
    if (!this.props.post.comments) {
      return null;
    }

    const title = this.props.post.is_self ? (
      <span>{this.props.post.title}</span>
    ) : (
      <a href={this.props.post.url} target="_blank" rel="noopener noreferrer">{this.props.post.title}</a>
    );

    const userText = this.props.post.selftext ? (
      <div className="full-post__header__text usertext" dangerouslySetInnerHTML={{ __html: this.props.post.selftext_html }} />
    ) : null;

    let postLikes = this.props.post.likes;
    const customVote = this.props.votes
                           .filter(cv => cv.contentId === this.props.post.id);

    if (customVote.length) {
      if (customVote[0].direction === 'unvote') {
        postLikes = null;
      } else {
        postLikes = customVote[0].direction === 'upvote';
      }
    }

    const upvoteClass = 'full-post__header__votes__up' + (postLikes ? ' is-active' : '');
    const downvoteClass = 'full-post__header__votes__down' + ((postLikes !== null && !postLikes) ? ' is-active' : '');

    let score = this.props.post.score;

    if (postLikes !== null) {
      if (postLikes) {
        score += 1;
      } else {
        score -= 1;
      }
    }

    return (
      <div id="full-post" className="full-post">
        <header className="full-post__header card">
          <div className="full-post__header__votes">
            <div className={upvoteClass} onClick={() => this.props.vote(this.props.post, postLikes, true)} />
            <div className="full-post__header__votes__score">{formatNumber(score)}</div>
            <div className={downvoteClass} onClick={() => this.props.vote(this.props.post, postLikes, false)} />
          </div>
          <h2 className="full-post__header__title">{title}</h2>
          <PostDetails post={this.props.post} hideScore />
          {userText}
          <PostMedia post={this.props.post} />
        </header>
        <Comments
          comments={this.props.post.comments}
          op={this.props.post.author.name}
          permalink={this.props.post.permalink}
        />
      </div>
    );
  }
}

FullPost.propTypes = {
  post: PropTypes.object,
  votes: PropTypes.array,
  vote: PropTypes.func,
};

const mapStateToProps = state => ({
  votes: state.votes,
});

const mapDispatchToProps = dispatch => ({
  vote: (post, likes, up) =>
    dispatch(voteComment(post, likes, up)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);
