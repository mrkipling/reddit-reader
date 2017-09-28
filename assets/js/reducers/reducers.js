import { combineReducers } from 'redux';

import activeSubreddit from './activeSubreddit';
import subreddit from './subreddit';
import post from './post';

export default combineReducers({
  activeSubreddit,
  subreddit,
  post,
});
