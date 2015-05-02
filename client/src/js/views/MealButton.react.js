const React = require('react');

let MealButton = React.createClass({
  render () {
    let meal = this.props.meal;
    return (
      <button
        className="meal-button"
      >
        <h4>{meal.name}</h4>
        <p>{meal.price}</p>
      </button>
    );
  }
});

module.exports = MealButton;
