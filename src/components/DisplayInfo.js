import React from 'react';

import StoreMarket from '../stores/StoreMarket'

class DisplayInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      info: {}
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
    console.log('More Info of the company')
  }
  render() {
    console.log('I am at the render ', this.state.info)
    if (this.state.info.Name) {
      return (
        <div> 
          <h3>Symbol: {this.state.info.Symbol}</h3>
          <h3>Name: {this.state.info.Name}</h3>
          <h3>Exchange: {this.state.info.Exchange}</h3>
          <br/>
          <button onClick={this.moreInfo}>More Info</button>
        </div>
      )
    }
    return <div>DisplayInfo</div>;
  }
}

export default DisplayInfo;
