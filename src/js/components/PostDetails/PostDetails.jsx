import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import { timeAgo, formatNumber } from '../../utils';

import styles from './PostDetails.scss';

class PostDetails extends React.Component {
  render() {
    const score = !this.props.hideScore ? (
      <li styleName="item--votes">{formatNumber(this.props.post.score)}</li>
    ) : null;

    return (
      <ul styleName="post-details" className="u-cf">
        {score}
        <li styleName="item--comments">{formatNumber(this.props.post.num_comments)}</li>
        <li styleName="item--time">
          <a href={'https://www.reddit.com' + this.props.post.permalink} target="_blank" rel="noopener noreferrer">
            {timeAgo(this.props.post.created_utc)}
          </a>
        </li>
        <li styleName="item--author">
          <a href={'https://www.reddit.com/u/' + this.props.post.author.name} target="_blank" rel="noopener noreferrer">{this.props.post.author.name}</a>
        </li>
      </ul>
    );
  }
}

PostDetails.propTypes = {
  post: PropTypes.object,
  hideScore: PropTypes.bool,
};

export default CSSModules(PostDetails, styles);
