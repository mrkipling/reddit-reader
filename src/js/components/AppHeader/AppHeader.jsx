import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import CSSModules from 'react-css-modules';
import styles from './AppHeader.scss';

import { changeSubreddit } from '../../actions/activeSubredditActions';

class AppHeader extends React.Component {
  render() {
    return (
      <header styleName="app-header">
        {!this.props.activeSubreddit ?
         null :
         <h1 styleName="name" onClick={this.props.askChangeSubreddit}>{'/r/' + this.props.activeSubreddit}</h1>
        }
      </header>
    );
  }
}

AppHeader.propTypes = {
  activeSubreddit: PropTypes.string,
  askChangeSubreddit: PropTypes.func,
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
  askChangeSubreddit: () => {
    const subreddit = window.prompt('Which subreddit would you like to view?');
    dispatch(changeSubreddit(subreddit));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(AppHeader, styles));
