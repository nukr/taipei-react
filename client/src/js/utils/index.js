import action from '../actions/ServerActionCreator';
import moment from 'moment'

let sleep = (t) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, t)
  })
}

export default {
  getData () {
    fetch('http://192.168.100.5:12345/meals').then((response) => {
      return response.json()
    }).then((json) => {
      action.getData(json)
    })
  },

  async getStatistics () {
    let response = await fetch('http://192.168.100.5:12345/bills?start=2015-05-05T00:00:00%2B08:00')
    let json = await response.json()
    action.getStatistics(json)
  },

  async fetchBills (ISOString = moment().hours(0).minute(0).second(0).millisecond(0).toISOString()) {
    let response = await fetch(`http://192.168.100.5:12345/bills?start=${ISOString}`)
    let json = await response.json()
    action.fetchBills(json)
  }
}
