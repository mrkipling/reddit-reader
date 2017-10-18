import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import Application from './components/Application';
import { fetchSubreddits } from './actions/subredditsActions';

const store = configureStore();
store.dispatch(fetchSubreddits());

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('app'),
);
