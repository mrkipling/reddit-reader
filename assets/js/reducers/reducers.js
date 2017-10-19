import { combineReducers } from 'redux';

import activeSubreddit from './activeSubreddit';
import subreddits from './subreddits';
import subreddit from './subreddit';
import post from './post';
import loading from './loading';

export default combineReducers({
  activeSubreddit,
  subreddits,
  subreddit,
  post,
  loading,
});
