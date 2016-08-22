import React from 'react';
import jsonp from 'jsonp'
import MarketActions from '../actions/MarketActions'
class SearchMarket extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          company: ''
        }

        this.onChangeCompnany = this.onChangeCompnany.bind(this);
        this.submit = this.submit.bind(this)
    }

    onChangeCompnany(e) {
      this.setState({company: e.target.value})
    }

    submit(e) {
      if(this.state.company) {
        let obj = {conpany : this.state.company}
        MarketActions.getInfo(obj)
      }
    }
    render() {
        return (
          <div>
            <input onChange={this.onChangeCompnany} type="text"  value={this.state.compnay} placeholder="Enter Compnay Name"/>
            <button onClick={this.submit} type="button" className="btn btn-primary btn-xs" >Search </button>
          </div>
        )
    }
}

export default SearchMarket;
