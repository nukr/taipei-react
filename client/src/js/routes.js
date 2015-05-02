import React from 'react';
import {Route, DefaultRoute, RouteHandler, Redirect} from 'react-router';

import Main from './views/Main.react';
import LaCarte from './views/LaCarte.react';

let routes = (
  <Route handler={Main} path="/">
    <Route name="la-carte" handler={LaCarte}>LaCarte</Route>
    <DefaultRoute handler={LaCarte}/>
  </Route>
);

export default routes;
