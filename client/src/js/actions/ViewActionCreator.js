import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
let ViewActionCreator = {
  lacarte (meal) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.LACARTE,
      meal: meal
    });
  },

  fetchBills (ISOString) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.FETCH_BILLS,
      date: ISOString
    })
  }
};
export default ViewActionCreator;
