import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveInfo(info) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_INFO',
      info
    })
  },
  receiveDetails(detail) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_DETAILS',
      details
    })
  },
}

export default ServerActions