import { combineReducers } from 'redux';

import activeSubreddit from './activeSubreddit';
import subreddits from './subreddits';
import subreddit from './subreddit';
import post from './post';
import moreComments from './moreComments';
import votes from './votes';
import loading from './loading';

export default combineReducers({
  activeSubreddit,
  subreddits,
  subreddit,
  post,
  moreComments,
  votes,
  loading,
});
