import API from '../API'

const MarketActions = {
  getInfo(company) {
    API.getResult(company)
  },
  getDetails(symbol) {
    API.getDetails(symbol)
  }
}

export default MarketActions