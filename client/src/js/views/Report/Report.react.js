import React, {Component} from 'react';
import AppStore from '../../stores/AppStore';
import cx from 'classnames'

let getState = () => {
  let statistics = AppStore.getStatistics()
  return statistics
}
class Report extends Component {
  constructor () {
    super();
    this.state = getState()
    this.change = () => this.setState(getState())
  }

  componentDidMount () {
    AppStore.addChangeListener(this.change)
  }

  componentWillUnmount () {
    AppStore.removeChangeListener(this.change)
  }

  render () {
    let faSpin = cx({
      'fa': true,
      'fa-refresh': true,
      'fa-spin': this.state.loading
    })
    return (
      <div style={{paddingTop: '60px'}}>
        <i className={faSpin}></i>
      </div>
    );
  }
}

export default Report;

