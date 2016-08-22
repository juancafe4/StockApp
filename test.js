const jsonp = require('jsonp')
const fetchJsonp = require('fetch-jsonp')


fetchJsonp('/users.jsonp')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json', json)
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })
// let infoUrl = 'http://dev.markitondemand.com/MODApis/Api/v2/Lookup/jsonp?input=Microsoft&callback=myFunction'
// jsonp(infoUrl, function (err, data) { 
//     if(err) throw err
//     else {
//       console.log(data)
//     }
// });