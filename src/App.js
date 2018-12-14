import React from 'react';
import { Provider } from 'react-redux';
import Game from './layouts/Game';
import store from './store';

const Root = () => (
  <Provider store={store}>
    <Game />
  </Provider>
);

export default Root;
