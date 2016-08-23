const jsonp = require('jsonp')
const express = require('express');
const axios = require('axios')
const router = express.Router();
const request = require('request')

router.route('/details').post((req, res) => {
  let detailUrl= 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?symbol=' + req.body.symbol

  request(detailUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
});
router.route('/info').post((req, res) => {
  let company = req.body.company
  let infoUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/Lookup/json?input=' + company 

  request(infoUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        res.send(body)
      }

  })
});

router.route('/charts').post((req, res) => {
  let symbol = req.body.symbol
  let infoUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/InteractiveChart/json?parameters=%7B%22Normalized%22%3Afalse%2C%22NumberOfDays%22%3A365%2C%22DataPeriod%22%3A%22Day%22%2C%22Elements%22%3A%5B%7B%22Symbol%22%3A%22' + symbol + '%22%2C%22Type%22%3A%22price%22%2C%22Params%22%3A%5B%22c%22%5D%7D%5D%7D'

  request(infoUrl, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        let obj = JSON.parse(body)
        // console.log(obj['Elements'][0].DataSeries)
        res.send({dates: obj['Dates'], values: obj['Elements'][0].DataSeries.close.values})
      }

  })
});

module.exports = router;