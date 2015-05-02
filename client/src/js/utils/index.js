import superagent from 'superagent';
import action from '../actions/ServerActionCreator';

export default {
  getData () {
    superagent
      .get('http://localhost:12345/meals')
      .end((err, res) => {
        if (err) throw new Error();
        action.getData(res.body.body);
      });
  }
}
