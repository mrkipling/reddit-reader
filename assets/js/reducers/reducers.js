import { combineReducers } from 'redux';

import subreddit from './subreddit';
import post from './post';

export default combineReducers({
  subreddit,
  post,
});
