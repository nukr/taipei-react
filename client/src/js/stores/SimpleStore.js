const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const actions = require('../actions/AppActionCreator');

const EventEmitter = require('events').EventEmitter; // 取得一個 pub/sub 廣播器

let Store = {};
let State = {};
State.meals = [];

/**
 * @description
 * Object.assign(obj1, obj2, ...) 把 Object.assign 就是把所有obj2 以後的 Object
 * 都塞進去 obj1 這是 ES6 的 feature 現在必須使用 6to5 這個套件來處理，
 * 我在 webpack.config.js 都有針對這一部分做處理
 *
 * 讓 Store 擁有所有 EventEmitter 的 method
 * 主要是讓他能有 .on .emit 這兩個功能
 */

Object.assign(Store, EventEmitter.prototype, {

  getState() {
    return State;
  },

  addChangeListener(callback) {
    this.on(AppConstants.CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(AppConstants.CHANGE_EVENT, callback);
  }

});

/**
 * 這邊是接收 Dispatcher 的地方，我們會針對 action.actionType 去 switch
 *
 * dispatchToken 只是一個簡單的 string，記錄著像 ID_1，ID_2 這樣的字串
 * 可以用在 waitFor 裡面，當有兩個以上的 AppDispatcher 註冊這個事件就可以靠這個 Token
 * 安排順序
 */
Store.dispatchToken = AppDispatcher.register(function eventHandlers(evt) {

  var action = evt.action;

  switch (action.actionType) {

    case AppConstants.DATA_LOAD:
      State.meals = action.items;
      Store.emit(AppConstants.CHANGE_EVENT);
      break;

    default:
  }
})


module.exports = Store;
