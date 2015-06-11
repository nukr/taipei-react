import React, {Component} from 'react';
import AppStore from '../../stores/AppStore';
import FixedDataTable, {Table, Column} from 'fixed-data-table'
import cx from 'classnames'

import 'fixed-data-table/dist/fixed-data-table.css'

let getState = () => {
  let statistics = AppStore.getStatistics()
  return statistics
}

let isColumnResizing;

class Report extends Component {
  constructor () {
    super();
    this.state = getState()
    this.state.tableWidth = window.innerWidth - 50
    this.state.tableHeight = window.innerHeight - 100
    this.state.columnWidth = 100
    this.change = () => this.setState(getState())
    this.rowGetter = ::this.rowGetter
    this.resizeEnd = ::this.resizeEnd
  }

  componentDidMount () {
    AppStore.addChangeListener(this.change)
  }

  componentWillUnmount () {
    AppStore.removeChangeListener(this.change)
  }

  rowGetter (rowIndex) {
    return this.state.statistics[rowIndex]
  }

  resizeEnd (e) {
    isColumnResizing = false
    this.setState({
      columnWidth: e
    })
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
        <Table
          rowHeight={50}
          rowGetter={this.rowGetter}
          rowsCount={this.state.statistics.length}
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
        </Table>
      </div>
    );
  }
}

export default Report;

