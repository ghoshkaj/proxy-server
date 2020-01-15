var express = require('express')
var cors = require('cors')
var app = express()
var request = require('request');
 
app.use(cors())

// var mock_response =
 
app.get('/story', function (req, res, next) {
  console.log(req)
  request({
    url: "http://localhost:2000/story",
    qs: { 
      address: req.query.address, 
      timeout: 10000
    },
    headers: {
      'Cape-Deadline-Msec': 60000
    },
    json: true,
    simple: true
  }, function(err, response, body) {
    if(err) { res.json({ err }); return; }
    res.json(body)
  });
  res.json(mock_response)
})
 
app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
})
