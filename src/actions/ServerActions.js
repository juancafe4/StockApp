import AppDispatcher from '../AppDispatcher'

const ServerActions = {
  receiveInfo(info) {
    AppDispatcher.dispatch({
      type: 'RECEIVE_INFO',
      info
    })
  },
}

export default ServerActions