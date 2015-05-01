const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');
const util = require('../util/');

let AppActionCreators = {

  init () {
    util.getMeals();
    AppDispatcher.handleViewAction({
      actionType: AppConstants.INIT
    });
  }

};

module.exports = AppActionCreators;
