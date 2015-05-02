import React from 'react';
import '../less/normalize.less';
import 'font-awesome/less/font-awesome.less';
import '../less/style.less';
import routes from './routes';
import Router from 'react-router';

Router.run(routes, (Handler) => {
  React.render(<Handler/>, document.body);
});
