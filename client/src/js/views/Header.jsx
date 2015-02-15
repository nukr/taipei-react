const React = require('react');
const action = require('../actions/AppActionCreator');
const store = require('../stores/SimpleStore');

let Header = React.createClass({
  render(){
    return(
      <div className="header">
        <h3>Header</h3>
      </div>
    )
  },
})

module.exports = Header;
