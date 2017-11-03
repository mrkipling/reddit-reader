import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import CSSModules from 'react-css-modules';
import styles from './Subreddit.scss';

import { changeSubreddit } from '../../actions/activeSubredditActions';

class Subreddit extends React.Component {
  render() {
    let cssClass = 'subreddit';

    if (this.props.activeSubreddit === this.props.subreddit.display_name) {
      cssClass = 'subreddit--active';
    }

    return (
      <li
        onClick={() => this.props.loadSubreddit(this.props.subreddit.display_name)}
        styleName={cssClass}
      >
        {this.props.subreddit.display_name_prefixed}
      </li>
    );
  }
}

Subreddit.propTypes = {
  activeSubreddit: PropTypes.string,
  loadSubreddit: PropTypes.func,
  subreddit: PropTypes.object,
};

const mapStateToProps = state => ({
  activeSubreddit: state.activeSubreddit,
});

const mapDispatchToProps = dispatch => ({
  loadSubreddit: subreddit =>
    dispatch(changeSubreddit(subreddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(Subreddit, styles));
