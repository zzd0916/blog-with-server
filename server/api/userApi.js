var models = require('../db');
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var $sql = require('../sqlMap');
var URL=require('url');

// 连接数据库
var conn = mysql.createConnection(models.mysql);

conn.connect();
var jsonWrite = function (res, ret) {
    if (typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret);
    }
};

// 增加用户接口
router.get('/select', (req, res) => {
  var sql = $sql.blog.blogList;
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
router.post('/detail', (req, res) => {
  var params = req.body;
  var id = params.id;
  //console.log(params)
  var sql = "select * from article_record where article_id = " +id;
  conn.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
router.post('/add', (req, res) => {
  var sql = $sql.blog.add;
  //var params = URL.parse(req.url, true).query;
  var params = req.body;
  var addSqlParams = [params.article_title, params.article_content, params.author, params.big_type_id, params.big_type_name, params.small_type_id, params.small_type_name];
  conn.query(sql, addSqlParams, function (err, result) {
    if (err) {
      console.log(err);
    }
    if (result) {
      jsonWrite(res, result);
    }
  })
});
module.exports = router;
