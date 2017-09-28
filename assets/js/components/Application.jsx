import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import AppHeader from './AppHeader';
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
          <Posts posts={this.props.posts} />
          <FullPost post={this.props.post} />
        </div>
      </div>
    );
  }
}

Application.propTypes = {
  name: PropTypes.string,
  posts: PropTypes.array,
  post: PropTypes.object,
};

const mapStateToProps = state => ({
  name: state.activeSubreddit,
  posts: state.subreddit ? state.subreddit : [],
  post: state.post ? state.post : {},
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Application);
