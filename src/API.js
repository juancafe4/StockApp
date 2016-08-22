
import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
  getResult(company) {
    axios.post('/api/markets/info', company)
      .then(res =>  {
        console.log('company ', company)
        console.log('API ', res.data)
        return res.data
      })
      .then(ServerActions.receiveInfo)
      .catch(console.error);
  },

  getDetails(symbol) {
    axios.post('/api/markets/details', symbol)
      .then(res => res.data)
      .then(ServerActions.receiveDetails)
      .catch(console.error);
  }
}
export default API;