import React, {Component} from 'react';
import {Paper, Tabs, Tab, RaisedButton, FlatButton, TextField, Toggle} from 'material-ui';
import action from '../actions/ViewActionCreator';
import AppStore from '../stores/AppStore';
let m = Object.assign;

let getState = () => {
  let State = AppStore.getState();
  return {
    meals: State.meals,
    lacartes: State.lacartes
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
      'normal',
      'newYear',
      'single',
      'sevenFive',
      'event',
      'christmas'
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
        <div style={{width: '300px', padding: '20px'}}>
          <TextField hintText="請輸入單號"/>
          <div style={{marginBottom: '10px'}}>
            <Toggle name="credit" label="刷卡"/>
          </div>
          <div>
            <Toggle name="discount" label="折扣"/>
          </div>
          <div>
            {[for (lacarte of this.state.lacartes) <div key={`lacarte-${lacarte.meal.id}`}>{lacarte.meal.name} - {lacarte.qty}</div>]}
          </div>
          <div style={m({display: 'flex', justifyContent: 'space-around', visibility: 'hidden'}, this.state.lacartes.length && {visibility: 'visible'})}>
            <FlatButton secondary={true} label="清除點單"/>
            <RaisedButton primary={true} label="送出點單"/>
          </div>
        </div>
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
