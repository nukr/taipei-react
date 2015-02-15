const AppDispatcher = require('../dispatcher/AppDispatcher');
const AppConstants = require('../constants/AppConstants');

let AppActionCreators = {

  load(meals){
    AppDispatcher.handleServerAction({
      actionType: AppConstants.DATA_LOAD,
      items: meals
    });
  }

};

module.exports = AppActionCreators;

