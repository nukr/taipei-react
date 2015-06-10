import React, {Component} from 'react';
import mui, {AppBar, AppCanvas, Menu, IconButton} from 'material-ui';
import action from '../actions/ViewActionCreator';
import AppStore from '../stores/AppStore';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {RouteHandler} from 'react-router';
import AppLeftNav from './LeftNav.react';

let ThemeManager = new mui.Styles.ThemeManager()
let Colors = mui.Styles.Colors

injectTapEventPlugin();

class Main extends Component {
  constructor () {
    super();
    this.toggleLeftNav = ::this.toggleLeftNav
  }

  getChildContext () {
    return {
      muiTheme: ThemeManager.getCurrentTheme()
    }
  }

  componentWillMount () {
    ThemeManager.setPalette({
      accent1Color: Colors.deepOrange500
    })
  }

  toggleLeftNav () {
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
          onLeftIconButtonTouchTap={this.toggleLeftNav}
          title="Test"
          zDepth={0}
          iconElementRight={githubButton}/>
        <AppLeftNav ref="leftNav" />
        <RouteHandler />
      </AppCanvas>
    );
  }
}

Main.childContextTypes = {
  muiTheme: React.PropTypes.object
}
export default Main;

