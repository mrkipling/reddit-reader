import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import AppHeader from './AppHeader';
import FullPost from './FullPost';

import {
  Posts,
  Subreddits,
} from '../components';

import '../../sass/site.scss';

class Application extends React.Component {
  render() {
    const subreddits = (this.props.loading === 'subreddits') ? (
      <div className="subreddits">
        <div className="loading" />
      </div>
    ) : (
      <Subreddits subreddits={this.props.subreddits} />
    );

    const posts = (this.props.loading === 'subreddit') ? (
      <div className="subreddit-posts">
        <div className="loading" />
      </div>
    ) : (
      <Posts posts={this.props.posts} />
    );

    const fullPost = (this.props.loading === 'post') ? (
      <div className="full-post">
        <div className="loading" />
      </div>
    ) : (
      <FullPost post={this.props.post} />
    );

    return (
      <div id="application">
        <AppHeader activeSubreddit={this.props.activeSubreddit} />
        <div className="u-cf">
          {subreddits}
          {posts}
          {fullPost}
        </div>
      </div>
    );
  }
}

Application.propTypes = {
  activeSubreddit: PropTypes.string,
  subreddits: PropTypes.array,
  posts: PropTypes.array,
  post: PropTypes.object,
  loading: PropTypes.string,
};

const mapStateToProps = state => ({
  activeSubreddit: state.activeSubreddit,
  subreddits: state.subreddits,
  posts: state.subreddit ? state.subreddit : [],
  post: state.post ? state.post : {},
  loading: state.loading,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
