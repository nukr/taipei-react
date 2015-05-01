const React = require('react');
const action = require('../actions/AppActionCreator');

let MealButton = React.createClass({
  render () {
    let meal = this.props.meal;
    return (
      <button
        onClick={this.props.onClick.bind(null, meal)}
        className="meal-button"
      >
        <h4>{meal.title}</h4>
        <p>{meal.price}</p>
      </button>
    );
  }
});

module.exports = MealButton;
