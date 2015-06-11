import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/AppConstants';
let ServerActionCreator = {
  getData (data) {
    AppDispatcher.handleServerAction({
      actionType: AppConstants.GET_DATA,
      data: data
    });
  },
  getStatistics (data) {
    AppDispatcher.handleServerAction({
      actionType: AppConstants.GET_STATISTICS,
      data: data
    });
  },
  fetchBills (data) {
    AppDispatcher.handleServerAction({
      actionType: AppConstants.FETCH_BILLS,
      data: data
    });
  }
};
export default ServerActionCreator;
