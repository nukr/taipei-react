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
    console.log(this.state)
    let faSpin = cx({
      'fa': true,
      'fa-refresh': true,
      'fa-spin': this.state.loading
    })
    return (
      <div style={{paddingTop: '60px'}}>
        <table>
        <i className={faSpin}></i>
          {
            this.state.statistics.map(stat => {
              return (
                <tr key={stat.billNo}>
                  <td>{stat.billNo}</td>
                  <td>{stat.creator}</td>
                  <td>
                    <ul>
                      {
                        stat.dishes.map((dish, index) => {
                          return (
                            <li key={`${stat.id}-dish${index}`}>{dish.name} - {dish.price} - {dish.quantity}</li>
                          )
                        })
                      }
                    </ul>
                  </td>
                  <td>{stat.shift === "morning" ? "早班" : "晚班"}</td>
                  <td>{stat.credit ? "刷卡" : ""}</td>
                  <td>{stat.discount ? "打折" : ""}</td>
                </tr>
              )
            })
          }
        </table>
      </div>
    );
  }
}

export default Report;

