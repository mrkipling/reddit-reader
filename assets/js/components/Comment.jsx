import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { plural } from '../utils';

class Comment extends React.Component {
  render() {
    const comment = this.props.comment;
    const score = this.props.comment.score;

    let authorCssClass = 'comment__header__author';

    if (this.props.activePost && this.props.activePost.author.name === comment.author.name) {
      authorCssClass += ' is-op';
    }

    return (
      <div className="comment">
        <header className="comment__header">
          <span className={authorCssClass}>{this.props.comment.author.name}</span>
          <span className="comment__header__votes">{score + ' ' + plural(score, ['vote', 'votes'])}</span>
        </header>
        <div className="usertext" dangerouslySetInnerHTML={{ __html: this.props.comment.body_html }} />
        {comment.replies.map(comm => <Comment key={comm.id} comment={comm} />)}
      </div>
    );
  }
}

Comment.propTypes = {
  comment: PropTypes.object,
  activePost: PropTypes.object,
};

const mapStateToProps = state => ({
  activePost: state.post ? state.post : null,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Comment);
