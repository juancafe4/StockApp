import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _info = {};
let _details = {};
let _data = {}
class StoreMarket extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_INFO':
          _info = action.info;
          this.emit('CHANGE');
          break;
        case 'RECIEVE_DETAILS':
          _details = action.details;
          this.emit('CHANGE');
          break;
        case 'RECIEVE_DATA':
          console.log(action.data.values[0])
          _data = action.data;
          this.emit('CHANGE');
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

  getData() {
    return _data
  }
}

export default new StoreMarket();