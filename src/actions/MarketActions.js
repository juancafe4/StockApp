import API from '../API'

const MarketActions = {
  getInfo(company) {
    API.getResult(company)
  },
  getDetails(symbol){
    API.getDetails(symbol)
  },
  getData(symbol) { 
    console.log('actions')
    API.getChartValues(symbol);
  }
}

export default MarketActions