import React from 'react';
import {Route, DefaultRoute, RouteHandler, Redirect} from 'react-router';

import Main from './views/Main.react';
import Carte from './views/Carte.react';

let routes = (
  <Route handler={Main} path="/">
    <Route name="carte" handler={Carte}>Carte</Route>
    <DefaultRoute handler={Carte}/>
  </Route>
);

export default routes;
