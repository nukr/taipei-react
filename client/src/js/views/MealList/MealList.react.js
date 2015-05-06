import React, {Component} from 'react';
import AppStore from '../../stores/AppStore';

let getState = () => {
  let app = AppStore.getState();
  return {
    meals: app.meals
  };
};

class MealList extends Component {
  constructor () {
    super();
    this.state = getState();
    this.change = () => this.setState(getState());
    this.renderMealList = (meals) => {
      let mealKeys = Object.keys(meals);
      let renderItems = (meals) => {
        return meals.map(meal => {
          return (
            <div>{meal.name}</div>
          );
        });
      };
      return mealKeys.map(key => {
        return (
          <div>
            <div>{key}</div>
            <div>{renderItems(meals[key])}</div>
          </div>
        );
      });
    };
  }

  componentDidMount () {
    AppStore.addChangeListener(this.change);
  }

  componentWillUnmount () {
    AppStore.removeChangeListener(this.change);
  }

  render () {
    let meals = this.state.meals;
    return (
      <div style={{paddingTop: '60px'}}>
        {this.renderMealList(meals)}
      </div>
    );
  }
}

export default MealList;
