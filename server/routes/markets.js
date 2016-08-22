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
        let obj = JSON.parse(body)
        res.send(obj)
      }

  })
});

module.exports = router;