const React = require('react');
const Main = React.createFactory(require('./views/Main.jsx'));
const action = require('./actions/AppActionCreator');
require('../less/normalize.less');
require('font-awesome/less/font-awesome.less');
require('../less/style.less');
action.init();

React.render(Main(), document.getElementById('react'));
