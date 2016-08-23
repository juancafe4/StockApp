import React from 'react';

import StoreMarket from '../stores/StoreMarket'
import MarketActions from '../actions/MarketActions'
import {browserHistory} from 'react-router'
import DisplayChart from './DisplayChart'
class DisplayInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      details: StoreMarket.getDetails(),
      symbol: this.props.params.symbol
    }
    this._onChange = this._onChange.bind(this);
    this.refresh = this.refresh.bind(this)
  }

  componentDidMount() {
    MarketActions.getDetails({symbol: this.state.symbol})
    StoreMarket.startListening(this._onChange);
  }

  componentWillUnmount() {
    StoreMarket.stopListening(this._onChange);
  }
  _onChange() {
    this.setState({
      details: StoreMarket.getDetails()
    });
  }

  refresh(e) {
    MarketActions.getDetails({symbol: this.state.symbol})
  }
  render() {
    console.log('details ', this.state.details.Name)
    if (this.state.details.Symbol) {

      let symbol = this.state.details.Symbol
      return (
        <div> 
          <h3>Name: {this.state.details.Name || 'No name'}</h3>
          <h3>Symbol: {this.state.details.Symbol}</h3>
          <h3>LastPrice: {this.state.details.LastPrice}</h3>
          <h3>Change: {this.state.details.Change} </h3>
          <h3>ChangePercent: {this.state.details.ChangePercent}</h3>
          <h3>Timestamp: {this.state.details.Timestamp}</h3>
          <br/>
          <button onClick={this.refresh} type='button'>Refresh</button>
          <br/>
          <DisplayChart symbol={symbol} />
        </div>

      )
    }
    return <div></div>;
  }
}

export default DisplayInfo; 