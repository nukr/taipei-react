const React = require('react');

let Footer = React.createClass({
  render() {
    return(
      <div className="footer">
        <div className="nav-btn-wrapper">
          <a href="#">
            <i className="fa fa-money"></i>
          </a>
        </div>

        <div className="nav-btn-wrapper">
          <a href="#">
            <i className="fa fa-list-ol"></i>
          </a>
        </div>

      </div>
    );
  }
});

module.exports = Footer;

