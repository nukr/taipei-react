import React, {Component} from 'react';
import {Paper, Tabs, Tab, RaisedButton, FlatButton, TextField, Toggle} from 'material-ui';
import Cashier from './Cashier.react';
import action from '../../actions/ViewActionCreator';
import AppStore from '../../stores/AppStore';
import styles from '../styles';
let m = Object.assign;

let getState = () => {
  let State = AppStore.getState();
  return {
    meals: State.meals,
    lacartes: State.lacartes,
    lacarteTotalPrice: State.lacarteTotalPrice
  };
};
class Carte extends Component {
  constructor () {
    super();
    this.state = getState();
    this.change = () => this.setState(getState());
    this.handleClick = (meal, e) => {
      action.lacarte(meal);
    };
  }

  componentDidMount () {
    AppStore.addChangeListener(this.change);
  }

  componentWillUnmount () {
    AppStore.removeChangeListener(this.change);
  }

  renderTabs () {
    let categoryOrder = [
      '一般',
      '新年',
      '單點',
      '七五折',
      '活動',
      '聖誕節'
    ];
    let renderBlocks = (key) => {
      if (Object.keys(this.state.meals).length !== 0) {
        return this.state.meals[key].map((meal, index) => {
          return (
            <Paper
              key={`meal-${index}`}
              onClick={this.handleClick.bind(null, meal)}
              innerStyle={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexFlow: 'column'}}
              style={{height: '100px', width: '100px', margin: '10px', WebkitUserSelect: 'none'}}>
              <div>{meal.name}</div>
              <div>${meal.price}</div>
            </Paper>
          );
        });
      }
    };
    return categoryOrder.map(category => {
      return (
        <Tab label={category} key={`tab-${category}`}>
          <div style={{display: 'flex', flexFlow: 'row wrap', justifyContent: 'space-around'}}>
            {renderBlocks(category)}
          </div>
        </Tab>
      );
    });
  }

  render () {
    return (
      <div style={{paddingTop: '64px', display: 'flex'}}>
        <Cashier />
        <div style={{flex: 1}}>
          <div style={{padding: 30}}>
            <Tabs>
              {this.renderTabs()}
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Carte;
