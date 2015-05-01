const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

let OrderAction = {

  add (meal) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_ORDER,
      items: meal
    });
  }

};

module.exports = OrderAction;

