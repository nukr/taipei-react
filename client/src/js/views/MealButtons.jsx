const React = require('react');
const OrderAction = require('../actions/OrderAction');
const store = require('../stores/SimpleStore');
const MealButton = require('./MealButton.jsx');

function getState() {
  return store.getState();
}
let MealButtons = React.createClass({
  getInitialState(){
    return getState();
  },

  renderMealButton() {
    let str = [];
    let meals = [];
    return meals = this.state.meals.map(function (meal, index) {
      return(
        <MealButton
          meal={meal}
          onClick={this.clickHandler}
          key={index}
        />
      )
    }.bind(this));
  },

  clickHandler(meal, event) {
    OrderAction.add(meal);
  },

  render() {
    return(
      <div className="meal-button-container">
        { this.renderMealButton() }
      </div>
    );
  }

});

module.exports = MealButtons;
