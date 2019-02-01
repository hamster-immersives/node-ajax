var express = require('express');
var router = express.Router();
var axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {

  axios.get('https://developers.zomato.com/api/v2.1/cities?q=new%20york', { 'headers': { 
            'Accept': 'application/json',
            'user-key': '4fc6a8d12cfad4fa96a78af7e0712108'
  }})
  .then(result => {
    res.render('index', { location:  result.data.location_suggestions});
  })
  .catch(error => {
    console.log(error)
  })
});

router.post('/', function(req, res) {

    axios.get(`https://developers.zomato.com/api/v2.1/cities?q=${req.body.city}`, { 'headers': { 
      'Accept': 'application/json',
      'user-key': '4fc6a8d12cfad4fa96a78af7e0712108'
        }})
        .then(result => {
        res.render('index', { location:  result.data.location_suggestions});
        })
        .catch(error => {
        console.log(error)
        })
});

router.delete('/fromdelete', function(req, res) {
  res.send('From delete')
})

router.put('/fromuput', function(req, res) {
  res.send('From put')
})


module.exports = router;
