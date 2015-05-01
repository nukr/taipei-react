const React = require('react');

let FooterButton = React.createClass({
  render() {
    return(
      <div className="nav-btn-wrapper" onClick={this.props.onClick}>
        <a href="#">
          <i className={`fa fa-${this.props.icon}`}></i>
        </a>
      </div>
    );
  }
});

module.exports = FooterButton;
