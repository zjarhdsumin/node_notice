const { application } = require('express');
var express = require('express');
const maria = require('../connect/maria');
var router = express.Router();
var app = express();
var port = 3000;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/insert', function(req, res){
  maria.query('insert into test(test_name) value("빈츠");', function(err, rows, fields){
    if(!err){
      res.send(rows);
    } else{
      console.log("err : " + err);
      res.send(err);
    }
  })
})

router.get('/api/get/demo', function(req, res){
  res.status(200).json({
    "message" : "call get api demo version"
  });
});

//Post 방식은 포스트맨으로 확인하기
router.post('/api/post/demo', function(req, res){
  res.status(200).json({
    "message" : "call post api demo version"
  });
});

//여기 올ㅏㅏㄴ가 맞ㅏ??

app.listen(port, function(){
  console.log("HI sksms wlsWK emdtlsdlei..." + port);
});

module.exports = router;
