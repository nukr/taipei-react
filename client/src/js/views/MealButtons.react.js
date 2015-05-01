import React, {Component} from 'react';
const OrderAction = require('../actions/OrderAction');
import SimpleStore from '../stores/SimpleStore';
import MealButton from './MealButton.react';

let getState = () => {
  return {
    SimpleStore: SimpleStore.getState()
  };
};


class MealButtons extends Component {
  constructor () {
    super();
    this.state = getState();
    this.handleClick = (meal, event) => {
      console.log(meal);
      OrderAction.add(meal);
    };
  }

  renderMealButton () {
    let str = [];
    let meals = [];
    return meals = this.state.SimpleStore.meals.map((meal, index) => {
      return (
        <MealButton
          meal={meal}
          onClick={this.handleClick}
          key={index}
        />
      );
    });
  }

  render () {
    return (
      <div className="meal-button-container">
        { this.renderMealButton() }
      </div>
    );
  }
}

export default MealButtons;

