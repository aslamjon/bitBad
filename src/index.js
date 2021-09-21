import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from './redux/store';
import Theme from './components/Theme';
import Router from './router';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Theme>
        <Router />
      </Theme>
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
);