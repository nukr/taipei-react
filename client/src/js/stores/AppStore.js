import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
import EventEmitter from 'eventemitter2';
import WebApiUtils from '../utils';
import moment from 'moment'

let State = {};
State.meals = {};
State.lacartes = [];
State.lacarteTotalPrice = 0;
State.loading = false;

let classifyMealsByCategory = (mealsOfArray) => {
  mealsOfArray.forEach(meal => {
    if (typeof State.meals[meal.category] === 'undefined') {
      State.meals[meal.category] = [];
    }
    State.meals[meal.category].push(meal);
  });
};

let lacarte = (meal) => {
  // before push we need know this meal's position in array(State.meals)
  let isNew = true;
  State.lacarteTotalPrice = 0; //Reset total price
  State.lacartes.forEach(l => {
    if (l.meal.id === meal.id) {
      isNew = false;
      l.qty += 1;
      l.total = l.meal.price * l.qty;
    }
    State.lacarteTotalPrice += l.meal.price * l.qty;
  });
  if (isNew) {
    State.lacartes.push({meal: meal, qty: 1, total: meal.price});
    State.lacarteTotalPrice += meal.price;
  }
};

/**
 * @description
 * Object.assign(obj1, obj2, ...) 把 Object.assign 就是把所有obj2 以後的 Object
 * 都塞進去 obj1 這是 ES6 的 feature 現在必須使用 6to5 這個套件來處理，
 * 我在 webpack.config.js 都有針對這一部分做處理
 *
 * 讓 Store 擁有所有 EventEmitter 的 method
 * 主要是讓他能有 .on .emit 這兩個功能
 */

class Store extends EventEmitter {
  getState () {
    if (Object.keys(State.meals).length === 0) {
      WebApiUtils.getData();
      State.loading = true;
      return State;
    } else {
      State.loading = false;
      return State;
    }
  }

  get bills () {
    if (State.bills) {
      return {
        loading: false,
        bills: State.bills
      }
    } else {
      let d = moment().hours(0).minute(0).second(0).millisecond(0).toISOString()
      WebApiUtils.fetchBills(d)
      return {
        loading: true,
        bills: []
      }
    }
  }

  addChangeListener (callback) {
    this.on(AppConstants.CHANGE_EVENT, callback);
  }

  removeChangeListener (callback) {
    this.removeListener(AppConstants.CHANGE_EVENT, callback);
  }
}

let store = new Store();

/**
 * 這邊是接收 Dispatcher 的地方，我們會針對 action.actionType 去 switch
 *
 * dispatchToken 只是一個簡單的 string，記錄著像 ID_1，ID_2 這樣的字串
 * 可以用在 waitFor 裡面，當有兩個以上的 AppDispatcher 註冊這個事件就可以靠這個 Token
 * 安排順序
 */
store.dispatchToken = AppDispatcher.register(function eventHandlers (evt) {

  var action = evt.action;

  switch (action.actionType) {

    case AppConstants.GET_DATA:
      classifyMealsByCategory(action.data);
      store.emit(AppConstants.CHANGE_EVENT);
      break;
    case AppConstants.GET_STATISTICS:
      State.statistics = action.data
      store.emit(AppConstants.CHANGE_EVENT);
      break;
    case AppConstants.LACARTE:
      lacarte(action.meal);
      store.emit(AppConstants.CHANGE_EVENT);
      break;
    case AppConstants.FETCH_BILLS:
      if (evt.source === AppConstants.SOURCE_VIEW_ACTION) {
        WebApiUtils.fetchBills(action.date)
      } else {
        State.bills = action.data
      }
      store.emit(AppConstants.CHANGE_EVENT);
      break;
    default:
  }
});

export default store;

