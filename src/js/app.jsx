import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import configureStore from './store/configureStore';
import Application from './components/Application';
import { fetchSubreddits } from './actions/subredditsActions';

const store = configureStore();
store.dispatch(fetchSubreddits());

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('app'),
  );
};

render (Application);

if (module.hot) {
  module.hot.accept('./components/Application', () => render(Application));
}
