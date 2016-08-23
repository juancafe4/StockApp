import React from 'react';

import StoreMarket from '../stores/StoreMarket'
import MarketActions from '../actions/MarketActions'
import {Link} from 'react-router'
class DisplayInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: []
    }
    this._onChange = this._onChange.bind(this);
    this.moreInfo = this.moreInfo.bind(this);

  }

  componentDidMount() {
    StoreMarket.startListening(this._onChange);
  }

  componentWillUnmount() {
    StoreMarket.stopListening(this._onChange);
  }
  _onChange() {
    this.setState({
     info: StoreMarket.getInfo()
    });
  }
  moreInfo() {
    MarketActions.receiveDetails({symbol: this.state.info.Symbol})
  }
  render() {

    if (this.state.info.length) {
      let trs =  this.state.info.map((val, index) => {
        let path = '/' + val.Symbol
        return (
          <tr key={index + 1}>
            <td>{val.Exchange}</td>
            <td>{val.Name}</td>
            <td>{val.Symbol}</td>
            <td><Link to={path}> More Info</Link></td>
          </tr>
        )
      });
      return (
        <table className='table'>
          <thead>
            <tr>
              <th>Exchange</th>
              <th>Name</th>
              <th>Symbol</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {trs}
          </tbody>
       </table>
      )
    }
    return <div>DisplayInfo</div>;
  }
}

export default DisplayInfo;
