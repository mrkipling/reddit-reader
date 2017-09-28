import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/configureStore';
import Application from './components/Application';
import * as subredditActions from './actions/subredditActions';

const store = configureStore();
store.dispatch(subredditActions.fetchSubreddit('relationships'));

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('app'),
);
