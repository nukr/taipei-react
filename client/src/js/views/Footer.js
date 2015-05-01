const React = require('react');
const FooterButton = require('./FooterButton');

let Footer = React.createClass({
  handleClick() {
    alert('hi');
  },

  render() {
    return(
      <div className="footer">
        <FooterButton icon='money' onClick={this.handleClick} />
        <FooterButton icon='bed' onClick={this.handleClick} />
        <FooterButton icon='ship' onClick={this.handleClick} />
        <FooterButton icon='medium' onClick={this.handleClick} />
        <FooterButton icon='user-secret' onClick={this.handleClick} />
      </div>
    );
  }
});

module.exports = Footer;

