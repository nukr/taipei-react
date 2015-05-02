import React, {Component} from 'react';

class Cashier extends Component {
  render () {
    return (
      <div className="cashier">
        <h3>Cashier</h3>
        <div className="bill-header">
          <div className="bill-header-name">餐點名稱</div>
          <div className="bill-header-price">價格</div>
          <div className="bill-header-quantity">數量</div>
        </div>
        <div className="bill-footer">
        </div>
      </div>
    );
  }
}

export default Cashier;

