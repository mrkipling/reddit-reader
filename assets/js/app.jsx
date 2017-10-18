import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import Application from './components/Application';
import { fetchSubreddits } from './actions/subredditsActions';
import { fetchSubreddit } from './actions/subredditActions';

const store = configureStore();
store.dispatch(fetchSubreddits());
store.dispatch(fetchSubreddit(store.getState().activeSubreddit));

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('app'),
);
