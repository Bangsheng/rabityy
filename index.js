import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/layout';
import Home from './components/home';
import Test from './components/test';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="test" component={Test} />
    </Route>
  </Router>
), document.getElementById('app'));
