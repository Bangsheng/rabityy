import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/Layout';
import Home from './components/Home';
import Test from './components/test';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="test" component={Test} />
      <Route
        path="/*"
        onEnter={(nextState, replace) => {
          replace('/');
        }}
      />
    </Route>
  </Router>
), document.getElementById('app'));
