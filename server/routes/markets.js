const jsonp = require('jsonp')
const express = require('express');
const axios = require('axios')
const router = express.Router();
const request = require('request')

router.route('/info').post((req, res) => {
  console.log('hit route')
  let infoUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=' + req.body.company + '&callback=myFunction'
  
  request(infoUrl, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    let obj = (JSON.parse('{' + body.split(/{([^}]+)}/g)[1] + '}'))

    res.send(obj)
  }

})
});

module.exports = router;