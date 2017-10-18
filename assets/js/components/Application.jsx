import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import AppHeader from './AppHeader';
import Subreddits from './Subreddits';
import Posts from './Posts';
import FullPost from './FullPost';

class Application extends React.Component {
  render() {
    return (!this.props.posts.length) ? (
      <p>Loading...</p>
    ) : (
      <div id="application">
        <AppHeader name={this.props.name} />
        <div className="u-cf">
          <Subreddits subreddits={this.props.subreddits} />
          <Posts posts={this.props.posts} />
          <FullPost post={this.props.post} />
        </div>
      </div>
    );
  }
}

Application.propTypes = {
  name: PropTypes.string,
  subreddits: PropTypes.array,
  posts: PropTypes.array,
  post: PropTypes.object,
};

const mapStateToProps = state => ({
  name: state.activeSubreddit,
  subreddits: state.subreddits,
  posts: state.subreddit ? state.subreddit : [],
  post: state.post ? state.post : {},
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
