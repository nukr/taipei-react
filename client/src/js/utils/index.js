import superagent from 'superagent';
import action from '../actions/ServerActionCreator';

export default {
  getData () {
    fetch('http://localhost:12345/meals').then((response) => {
      return response.json()
    }).then((json) => {
      action.getData(json)
    })
  }
}
