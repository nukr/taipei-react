const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

const EventEmitter = require('events').EventEmitter; // 取得一個 pub/sub 廣播器

let Store = {};
let State = {};
State.orders = {};

Object.assign(Store, EventEmitter.prototype, {

  getState() {
    return State;
  },

  add(meal) {
    meal.count = meal.count || 0;
    meal.count++;
    State.orders[meal._id] = meal;
  },

  addChangeListener(callback) {
    this.on(AppConstants.CHANGE_EVENT, callback);
  },

  removeChangeListener(callback) {
    this.removeListener(AppConstants.CHANGE_EVENT, callback);
  }

});

Store.dispatchToken = AppDispatcher.register(function eventHandlers(evt) {

  var action = evt.action;

  switch (action.actionType) {

    case AppConstants.ADD_ORDER:
      Store.add(action.items);
      Store.emit(AppConstants.CHANGE_EVENT);
      break;

    default:
  }
});


module.exports = Store;

