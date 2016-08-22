
import axios from 'axios'
import ServerActions from './actions/ServerActions'

// const API = {
//   getAllTodos() {
//     axios.get('/api/market')
//       .then(res => res.data)
//       .then(ServerActions.receiveTodos)
//       .catch(console.error);
//   },
//   createTodo(todo) {
//     axios.post('/api/detailInfo', todo)
//       .then(res => res.data)
//       .then(ServerActions.receiveOneTodo)
//       .catch(console.error);
//   }
// }

const API = {
  getResult(company) {
    axios.post('/api/markets/info', company)
      .then(res => res.data)
      .then(ServerActions.receiveInfo)
      .catch(console.error);
  },

  getDetails(symbol) {
    console.log('nothing is here testing routes')
  }
}
export default API;