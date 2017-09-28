import PropTypes from 'prop-types';
import React from 'react';

import { plural } from '../utils';

class Comment extends React.Component {
  render() {
    const comment = this.props.comment;
    const score = this.props.comment.score;

    return (
      <div className="comment">
        <header className="comment__header">
          <span className="comment__header__user">{this.props.comment.author.name}</span>
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
};

export default Comment;
