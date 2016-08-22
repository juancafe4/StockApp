import React, { Component } from 'react';
import SearchMarket from './SearchMarket'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1 className="text-center">Welcome to the Stock Market App!</h1>
        <SearchMarket />
      </div>
    )
  }
}

