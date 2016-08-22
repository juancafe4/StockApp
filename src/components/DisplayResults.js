import React from 'react';

import StoreMarket from '../stores/StoreMarket'
import MarketActions from '../actions/MarketActions'

class DisplayInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      details: []
    }
    this._onChange = this._onChange.bind(this);
  }

  componentDidMount() {
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
  render() {
    console.log('details ', this.state.details)
    if (!this.state.details.length) {
      return (
        <div> 
          It works
        </div>
      )
    }
    return <div>DisplayInfo</div>;
  }
}

export default DisplayInfo; 