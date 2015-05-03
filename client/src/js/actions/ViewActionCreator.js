import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
let ViewActionCreator = {
  lacarte (meal) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.LACARTE,
      meal: meal
    });
  }
};
export default ViewActionCreator;
