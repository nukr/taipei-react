import React, {Component} from 'react';
import {DatePicker, FlatButton} from 'material-ui'
import AppStore from '../../stores/AppStore';
import FixedDataTable, {Table, Column} from 'fixed-data-table'
import ViewAction from '../../actions/ViewActionCreator'
import cx from 'classnames'

import 'fixed-data-table/dist/fixed-data-table.css'

let getState = () => {
  let bills = AppStore.bills
  return bills
}

let isColumnResizing;

class Report extends Component {
  constructor () {
    super();
    this.state = getState()
    this.state.tableWidth = window.innerWidth - 350
    this.state.tableHeight = window.innerHeight - 100
    this.state.columnWidth = 100
    this.change = () => this.setState(getState())
    this.rowGetter = ::this.rowGetter
    this.resizeEnd = ::this.resizeEnd
    this.send = ::this.send
    this.dishesRenderer = ::this.dishesRenderer
  }

  componentDidMount () {
    AppStore.addChangeListener(this.change)
  }

  componentWillUnmount () {
    AppStore.removeChangeListener(this.change)
  }

  rowGetter (rowIndex) {
    return this.state.bills[rowIndex]
  }

  resizeEnd (e) {
    isColumnResizing = false
    this.setState({
      columnWidth: e
    })
  }

  send () {
    let d = this.refs.d.getDate()
    ViewAction.fetchBills(d.toISOString())
  }

  dishesRenderer (cell) {
    return (
      <ul>
        {cell.map((c, index) => <li key={`dish-${index}`}>{c.name}</li>)}
      </ul>
    )
  }

  render () {
    console.log(this.state)
    let faSpin = cx({
      'fa': true,
      'fa-refresh': true,
      'fa-spin': this.state.loading
    })
    return (
      <div style={{paddingTop: '100px', display: 'flex', justifyContent: 'center'}}>
        <div style={{width: 300}}>
          <DatePicker
            hintText="Portrait Dialog"
            ref="d"/>
          <FlatButton label="Send" onClick={this.send}/>
        </div>
        <div>
          <Table
            rowHeight={50}
            rowGetter={this.rowGetter}
            rowsCount={this.state.bills.length}
            width={this.state.tableWidth}
            height={this.state.tableHeight}
            headerHeight={50}
            onColumnResizeEndCallback={this.resizeEnd}
            isColumnResizing={isColumnResizing}>
            <Column
              label="訂單編號"
              width={this.state.columnWidth}
              dataKey="billNo"
              isResizable={true}/>
            <Column
              label="建立者"
              width={100}
              dataKey="creator"/>
            <Column
              label="刷卡"
              width={100}
              dataKey="credit"/>
            <Column
              label="折扣"
              width={100}
              dataKey="discount"/>
            <Column
              label="班別"
              width={100}
              dataKey="shift"/>
            <Column
              label="餐點"
              width={100}
              dataKey="dishes"
              cellRenderer={this.dishesRenderer}/>
          </Table>
        </div>
      </div>
    );
  }
}

export default Report;

