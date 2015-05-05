import React, {Component} from 'react';
import Router from 'react-router';
import {MenuItem, LeftNav} from 'material-ui';

let menuItems = [
    { route: 'carte', text: '點餐' },
    { route: 'meal list', text: '菜單管理' },
    { route: 'components', text: 'Components' },
    { type: MenuItem.Types.SUBHEADER, text: 'Resources' },
    { type: MenuItem.Types.LINK, payload: 'https://github.com/callemall/material-ui', text: 'GitHub' },
    { type: MenuItem.Types.LINK, payload: 'http://facebook.github.io/react', text: 'React' },
    { type: MenuItem.Types.LINK, payload: 'https://www.google.com/design/spec/material-design/introduction.html', text: 'Material Design' }
  ];

class AppLeftNav extends React.Component {

  constructor () {
    super();
    this.toggle = this.toggle.bind(this);
    this._getSelectedIndex = this._getSelectedIndex.bind(this);
    this._onLeftNavChange = this._onLeftNavChange.bind(this);
    this._onHeaderClick = this._onHeaderClick.bind(this);
  }

  render () {
    return (
      <LeftNav
        ref="leftNav"
        docked={false}
        isInitiallyOpen={false}
        menuItems={menuItems}
        selectedIndex={this._getSelectedIndex()}
        onChange={this._onLeftNavChange} />
    );
  }

  toggle () {
    this.refs.leftNav.toggle();
  }

  _getSelectedIndex () {
    var currentItem;

    for (var i = menuItems.length - 1; i >= 0; i--) {
      currentItem = menuItems[i];
      if (currentItem.route && this.context.router.isActive(currentItem.route)) return i;
    }
  }

  _onLeftNavChange (e, key, payload) {
    this.context.router.transitionTo(payload.route);
  }

  _onHeaderClick () {
    this.context.router.transitionTo('root');
    this.refs.leftNav.close();
  }

}

AppLeftNav.contextTypes = {
  router: React.PropTypes.func.isRequired
};

module.exports = AppLeftNav;
