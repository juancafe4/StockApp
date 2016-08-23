
import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getResult(company) {
    axios.post('/api/markets/info', company)
      .then(res =>  {
        return res.data
      })
      .then(ServerActions.receiveInfo)
      .catch(console.error);
  },

  getDetails(symbol) {
    axios.post('/api/markets/details', symbol)
      .then(res => {
        return res.data
      })
      .then(ServerActions.receiveDetails)
      .catch(console.error);
  },

  getChartValues(symbol) {
    axios.post('/api/markets/charts', symbol)
      .then(res => {
        return res.data
      })
      .then(ServerActions.getChartValues)
      .catch(console.error);
  }
}
export default API;