import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
import App from './components/App'
import DisplayResults from './components/DisplayResults'
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}/>
    <Route path="/:symbol" component={DisplayResults}/>
  </Router>
), document.getElementById('root'))