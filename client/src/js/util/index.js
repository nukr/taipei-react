const meals = require('../fixtures/meals');
const action = require('../actions/ServerAction');

exports.getMeals = function () {
  action.load(meals);
};

