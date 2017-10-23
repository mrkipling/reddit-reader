import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { plural, timeAgo, formatNumber } from '../utils';
import { fetchMoreComments } from '../actions/moreCommentsActions';
import { voteComment } from '../actions/voteActions';

class Comment extends React.Component {
  render() {
    const comment = this.props.comment;
    const score = comment.score;

    let authorCssClass = 'comment__header__author';

    if (this.props.op === comment.author.name) {
      authorCssClass += ' is-op';
    }

    const flair = comment.author_flair_text ? (
      <span className="flair">{comment.author_flair_text}</span>
    ) : null;

    const edited = comment.edited ? (
      <span
        className="comment__header__edited"
        title={'last edited ' + timeAgo(comment.edited)}
      >
        *
      </span>
    ) : null;

    const upvoteClass = 'comment__votes__up' + (comment.likes ? ' is-active' : '');
    const downvoteClass = 'comment__votes__down' + ((comment.likes !== null && !comment.likes) ? ' is-active' : '');

    let gold = null;

    if (comment.gilded) {
      gold = comment.gilded > 1 ? (
        <span className="gold gold--multi" title="Redditor was gifted gold for this submission">
          <span className="gold__amount">{'x' + comment.gilded}</span>
        </span>
      ) : (
        <span className="gold" title="Redditor was gifted gold for this submission" />
      );
    }

    let fetchedMoreComments = this.props.moreComments
                                  .filter(mc => mc.commentId === comment.id);

    let eleFetchedMoreComments = null;

    if (fetchedMoreComments.length) {
      fetchedMoreComments = fetchedMoreComments[0].comments;
      eleFetchedMoreComments = fetchedMoreComments
        .map(comm => (
          <Comment
            key={comm.id}
            comment={comm}
            op={this.props.op}
            permalink={this.props.permalink}
            moreComments={this.props.moreComments}
            fetchMoreComments={this.props.fetchMoreComments}
          />
        ));
    } else {
      fetchedMoreComments = null;
    }

    const continueThread = (comment.replies && !comment.replies.length && !comment.replies.isFinished && comment.replies._query.comment) ? (
      <a
        className="comment__continue-thread"
        href={'https://www.reddit.com/' + this.props.permalink + comment.replies._query.comment}
        target="_blank"
        rel="noopener noreferrer"
      >
        Continue this thread
      </a>
    ) : null;

    const fetchedIsDone = fetchedMoreComments && fetchedMoreComments.isFinished;
    const moreComments = (continueThread === null && comment.replies && !comment.replies.isFinished && !fetchedIsDone) ? (
      <div
        className="comment__more-comments"
        onClick={() => this.props.fetchMoreComments(comment)}
      >
        load more comments
      </div>
    ) : null;

    return (
      <div className="comment">
        <div className="comment__votes">
          <div className={upvoteClass} onClick={() => this.props.voteComment(comment, true)} />
          <div className={downvoteClass} onClick={() => this.props.voteComment(comment, false)} />
        </div>
        <header className="comment__header">
          <span className={authorCssClass}>
            <a href={'https://www.reddit.com/u/' + comment.author.name}>
              {comment.author.name}
            </a>
          </span>
          {flair}
          <span className="comment__header__votes">{formatNumber(score) + ' ' + plural(score, ['vote', 'votes'])}</span>
          <span className="comment__header__time"> <a href={'https://www.reddit.com' + this.props.permalink + comment.id + '/'} target="_blank" rel="noopener noreferrer">{timeAgo(comment.created_utc)}</a></span>
          {edited}
          {gold}
        </header>
        <div className="usertext" dangerouslySetInnerHTML={{ __html: comment.body_html }} />
        {comment.replies && comment.replies.map(comm => (
          <Comment
            key={comm.id}
            comment={comm}
            op={this.props.op}
            permalink={this.props.permalink}
            moreComments={this.props.moreComments}
            fetchMoreComments={this.props.fetchMoreComments}
            voteComment={this.props.voteComment}
          />
        ))}
        {eleFetchedMoreComments}
        {moreComments}
        {continueThread}
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object,
  op: PropTypes.string,
  permalink: PropTypes.string,
  moreComments: PropTypes.array,
  fetchMoreComments: PropTypes.func,
  voteComment: PropTypes.func,
};

const mapStateToProps = state => ({
  moreComments: state.moreComments,
});

const mapDispatchToProps = dispatch => ({
  fetchMoreComments: comment =>
    dispatch(fetchMoreComments(comment)),

  voteComment: (comment, up) =>
    dispatch(voteComment(comment, up)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
