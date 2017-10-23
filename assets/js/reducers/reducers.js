import { combineReducers } from 'redux';

import activeSubreddit from './activeSubreddit';
import subreddits from './subreddits';
import subreddit from './subreddit';
import post from './post';
import moreComments from './moreComments';
import vote from './vote';
import loading from './loading';

export default combineReducers({
  activeSubreddit,
  subreddits,
  subreddit,
  post,
  moreComments,
  vote,
  loading,
});
