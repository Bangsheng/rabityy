import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/Layout';
import Home from './components/Home';
import Submit from './components/Submit';
import Contact from './components/Contact';
import Material from './components/Material';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="submit-document" component={Submit} />
      <Route path="material" component={Material} />
      <Route path="contact-us" component={Contact} />
      <Route
        path="/*"
        onEnter={(nextState, replace) => {
          replace('/');
        }}
      />
    </Route>
  </Router>
), document.getElementById('app'));
