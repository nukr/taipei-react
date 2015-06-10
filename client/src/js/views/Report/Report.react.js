import React, {Component} from 'react';
import AppStore from '../../stores/AppStore';
import FixedDataTable, {Table, Column} from 'fixed-data-table'
import cx from 'classnames'

import 'fixed-data-table/dist/fixed-data-table.css'

let getState = () => {
  let statistics = AppStore.getStatistics()
  return statistics
}

class Report extends Component {
  constructor () {
    super();
    this.state = getState()
    this.state.tableWidth = window.innerWidth
    this.state.tableHeight = window.innerHeight - 60
    this.change = () => this.setState(getState())
    this.rowGetter = ::this.rowGetter
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

  render () {
    console.log(this.state)
    let faSpin = cx({
      'fa': true,
      'fa-refresh': true,
      'fa-spin': this.state.loading
    })
    return (
      <div style={{paddingTop: '60px'}}>
        <Table
          rowHeight={50}
          rowGetter={this.rowGetter}
          rowsCount={this.state.statistics.length}
          width={this.state.tableWidth}
          height={this.state.tableHeight}
          headerHeight={50}>
          <Column
            label="訂單編號"
            width={100}
            dataKey="billNo"/>
          <Column
            label="建立者"
            width={200}
            dataKey="creator"/>
        </Table>
      </div>
    );
  }
}

export default Report;

