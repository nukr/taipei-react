const React = require('react');
const action = require('../actions/AppActionCreator');
const store = require('../stores/SimpleStore');
const Header = require('./Header.jsx');
const Cashier = require('./Cashier.jsx');
const MealButtons = require('./MealButtons.jsx');
const Footer = require('./Footer');

function getState() {
  return store.getState();
}

let Main = React.createClass({
  getInitialState(){
    return getState();
  },

  componentDidMount(){
    store.addChangeListener(this.change);
  },

  componentWillUnmount(){
    store.removeChangeListener(this.change);
  },

  handleClick(meal) {
    action.addOrder(meal);
  },

  change() {
    this.setState(getState());
  },

  render() {
    return(
      <div className="main">
        <Cashier />
        <div className="right-side">
          <MealButtons />
          <Footer />
        </div>
      </div>
    );
  }

})

module.exports = Main;
