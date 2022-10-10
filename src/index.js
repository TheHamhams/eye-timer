import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { Layout } from './components/index'
import React from 'react';
import ReactDOM from 'react-dom';
import {firebaseConfig} from './firebaseConfig'

ReactDOM.render(
  <React.StrictMode>
  <Router>
    <Switch>
      <Route exact path='/'>
        <Layout />
      </Route>
    </Switch>
  </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

