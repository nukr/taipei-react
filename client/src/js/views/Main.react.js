import React, {Component} from 'react';
import action from '../actions/ViewActionCreator';
import AppStore from '../stores/AppStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {RouteHandler} from 'react-router';
import {AppBar, AppCanvas, Menu, IconButton} from 'material-ui';

import AppLeftNav from './LeftNav.react';

injectTapEventPlugin();

class Main extends Component {
  constructor () {
    super();
    this._onLeftIconButtonTouchTap = this._onLeftIconButtonTouchTap.bind(this);
  }

  _onLeftIconButtonTouchTap () {
    this.refs.leftNav.toggle();
  }

  render () {
    let githubButton = (
      <IconButton
        iconStyle={{color: '#FFF', fill: '#FFF'}}
        iconClassName="fa fa-gear"
        href="https://github.com/callemall/material-ui"
        linkButton={true} />
    );
    return (
      <AppCanvas predefinedLayout={1}>
        <AppBar
          className="mui-dark-theme"
          onMenuIconButtonTouchTap={this._onLeftIconButtonTouchTap}
          title="Test"
          zDepth={0}
          iconElementRight={githubButton}/>
        <AppLeftNav ref="leftNav" />
        <RouteHandler />
      </AppCanvas>
    );
  }
}

export default Main;

