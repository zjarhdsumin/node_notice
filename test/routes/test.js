const { application } = require('express');
var express = require('express');
const maria = require('../connect/maria');
var router = express.Router();  //express 프레임워크 라우터 사용을 위함
var app = express();
var port = 3000;

router.get('/', function(req, res, next){
    res.render('form.ejs', {title : 'form test'});  //해당 view 파일 지정 가능
});

module.exports = router;  //전역으로 test 라우터 사용