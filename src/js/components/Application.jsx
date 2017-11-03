import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import {
  AppHeader,
  FullPost,
  Posts,
  Subreddits,
} from '../components';

import '../../sass/site.scss';

class Application extends React.Component {
  render() {
    return (
      <div id="application">
        <AppHeader activeSubreddit={this.props.activeSubreddit} />
        <div className="u-cf">
          <Subreddits
            subreddits={this.props.subreddits}
            isLoading={this.props.loading === 'subreddits'}
          />
          <Posts
            posts={this.props.posts}
            isLoading={this.props.loading === 'subreddit'}
          />
          <FullPost
            post={this.props.post}
            isLoading={this.props.loading === 'post'}
          />
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
