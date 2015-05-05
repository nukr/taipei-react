import React, {Component} from 'react';
import {RaisedButton, FlatButton, TextField, Toggle} from 'material-ui';
import AppStore from '../../stores/AppStore';
import styles from '../styles';
let m = Object.assign;

let getState = () => {
  let State = AppStore.getState();
  return {
    lacartes: State.lacartes,
    lacarteTotalPrice: State.lacarteTotalPrice
  };
};

class Cashier extends Component {
  constructor () {
    super();
    this.state = getState();
    this.change = () => this.setState(getState());
  }

  componentDidMount () {
    AppStore.addChangeListener(this.change);
  }

  componentWillUnmount () {
    AppStore.removeChangeListener(this.change);
  }

  renderLaCartes () {
    return this.state.lacartes.map(lacarte => {
      return (
        <div style={styles.lacarteListItem} key={`lacarte-${lacarte.meal.id}`}>
          <div style={styles.lacarteListItemInner}>{lacarte.meal.name}</div>
          <div style={styles.lacarteListItemInner}>{lacarte.qty}</div>
          <div style={styles.lacarteListItemInner}>${lacarte.total}</div>
          <div style={styles.lacarteListItemInner}><FlatButton primary={true} label="移除"/></div>
        </div>
      );
    });
  }
  render () {
    return (
      <div style={{width: '300px', padding: '20px'}}>
        <TextField hintText="請輸入單號"/>
        <div style={{marginBottom: '10px', marginTop: '10px'}}>
          <Toggle name="credit" label="刷卡"/>
        </div>
        <div>
          <Toggle name="discount" label="折扣"/>
        </div>
        <div>
          {this.renderLaCartes()}
        </div>
        <div style={m(styles.summary, this.state.lacartes.length && {display: 'flex'})}>
          <div style={styles.summaryInner}></div>
          <div style={styles.summaryInner}></div>
          <div style={styles.summaryInner}>${this.state.lacarteTotalPrice}</div>
          <div style={styles.summaryInner}></div>
        </div>
        <div style={m({display: 'none', justifyContent: 'space-around', marginTop: '20px'}, this.state.lacartes.length && {display: 'flex'})}>
          <FlatButton secondary={true} label="清除點單"/>
          <RaisedButton primary={true} label="送出點單"/>
        </div>
      </div>
    );
  }
}

export default Cashier;
