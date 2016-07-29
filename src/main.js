import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute, hashHistory  } from 'react-router'

import App from './components/App'
import Tenants from './components/Tenants'
import Properties from './components/Properties'
import Welcome from './components/Welcome'
import Navbar from './components/Navbar';

render(
  <Router history={ hashHistory }>
    <Route path='/' component={ App }>
      <IndexRoute component={ Welcome } />
      <Route path='tenants' component={ Tenants } />
      <Route path='properties' component={ Properties } />
    </Route>
  </Router>,
  document.getElementById('root')
)
