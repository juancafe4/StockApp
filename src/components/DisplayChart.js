import React from 'react';

import StoreMarket from '../stores/StoreMarket'
import MarketActions from '../actions/MarketActions'
import  {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'Recharts';

  class DisplayChart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: {}
        }
        this._onChange = this._onChange.bind(this);
    }
    componentDidMount() {
      MarketActions.getData({symbol: this.props.symbol})
      StoreMarket.startListening(this._onChange);
    }

    componentWillUnmount() {
      StoreMarket.stopListening(this._onChange);
    }
    _onChange() {

      this.setState({
        data: StoreMarket.getData()
      });
    }
    render() {
        
        if (this.state.data.values) {
      
          let objs = this.state.data.values. map((val, index) => {
            return {Prices: val, date: this.state.data.dates[index].split('T')[0]}
          })

          return (
             <LineChart width={1500} height={500} data={objs}
            margin={{top: 5, right: 30, left: 20, bottom: 5}}>
               <XAxis dataKey="date"/>
               <YAxis/>
               <CartesianGrid strokeDasharray="3 3"/>
               <Tooltip/>
               <Legend />
               <Line type="monotone" dataKey="Prices" stroke="#8884d8" activeDot={{r: 8}}/>
            </LineChart>
          )
        }

        else return <div>DisplayChart</div>;
    }
}

export default DisplayChart;
