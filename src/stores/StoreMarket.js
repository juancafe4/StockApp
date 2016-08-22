import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'

let _info = [];

class StoreMarket extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_INFO':
          _info = action.info;
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
    console.log('I have been called with iinfo ', _info)
    return _info;
  }
}

export default new StoreMarket();