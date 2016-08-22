const jsonp = require('jsonp')
const express = require('express');
const axios = require('axios')
const router = express.Router();
const request = require('request')

router.route('/details').post((req, res) => {
  let detailUrl= 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/jsonp?symbol=' + req.body.symbol + '&callback=myFunction'

  request(detailUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
});
router.route('/info').post((req, res) => {
  let infoUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=' + req.body.conpany + '&callback=myFunction'

  request(infoUrl, function (error, response, body) {
 
    if (!error && response.statusCode == 200) {
      let obj = (JSON.parse('{' + body.split(/{([^}]+)}/g)[1] + '}'))
      console.log('obj ', obj)
      res.send(obj)
    }

  })
});

module.exports = router;