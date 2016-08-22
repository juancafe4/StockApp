import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _info = {};
let _details = {};
class StoreMarket extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_INFO':
          console.log('store ', action.info)
          _info = action.info;
          this.emit('CHANGE');
          break;
        case 'RECIEVE_DETAILS':
          _detials = action.details;
          this.emmit('CHANGE')
          break;
      }
    });
  }

  startListening(cb) {
    this.on('CHANGE', cb);
  }

  stopListening(cb) {
    this.removeListener('CHANGE', cb);
  }

  getInfo() {
    return _info;
  }

  getDetails() {
    return _details
  }
}

export default new StoreMarket();