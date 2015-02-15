const React = require('react');
const OrderStore = require('../stores/OrderStore');

function getState() {
  return OrderStore.getState();
}

let Cashier = React.createClass({
  getInitialState() {
    return getState();
  },

  componentDidMount() {
    OrderStore.addChangeListener(this.change);
  },

  componentWillUnmount() {
    OrderStore.removeChangeListener(this.change);
  },

  change() {
    this.setState(getState());
  },

  renderOrders() {
    let orders = [];
    let stateOrders = this.state.orders
    Object.keys(this.state.orders).forEach(function (key, index) {
      orders.push (
        <div key={index} className="bill-body">
          <div className="bill-body-name">{stateOrders[key].title}</div>
          <div className="bill-body-price">{stateOrders[key].price}</div>
          <div className="bill-body-quantity">{stateOrders[key].count}</div>
        </div>
      );
    }.bind(this));
    return orders;
  },

  render() {
    return(
      <div className="cashier">

        <h3>Cashier</h3>
        <div className="bill-header">
          <div className="bill-header-name">餐點名稱</div>
          <div className="bill-header-price">價格</div>
          <div className="bill-header-quantity">數量</div>
        </div>

        {this.renderOrders()}

        <div className="bill-footer">
        </div>

      </div>
    )
  },
});

module.exports = Cashier;
