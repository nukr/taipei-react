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
        return meals.map((meal) => {
          return (
            <div key={meal.id} style={{fontSize: '16px'}}>{meal.name}</div>
          );
        });
      };
      return mealKeys.map((key, index) => {
        return (
          <div key={`MealList-${index}`}style={{marginRight: '20px'}}>
            <h3>{key}</h3>
            <div style={{marginLeft: '20px'}}>{renderItems(meals[key])}</div>
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
      <div style={{
        paddingTop: '60px',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around'}}>
        {this.renderMealList(meals)}
      </div>
    );
  }
}

export default MealList;
