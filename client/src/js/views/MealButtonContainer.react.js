import React, {Component} from 'react';
import MealButton from './MealButton.react';

class MealButtonContainer extends Component {
  render () {
    return (
      <div className="meal-button-container">
        {this.props.meals.map((meal, index) => <MealButton meal={meal} key={`meal-${index}`}/>)}
      </div>
    );
  }
}

export default MealButtonContainer;

