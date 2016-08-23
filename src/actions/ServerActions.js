import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveInfo(info) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_INFO',
      info
    })
  },
  receiveDetails(details) {
    AppDispatcher.dispatch({
      type: 'RECIEVE_DETAILS',
      details
    })
  },
  getChartValues(data) {
    AppDispatcher.dispatch({
    type: 'RECIEVE_DATA',
    data
  })
  }
}

export default ServerActions