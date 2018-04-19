// sql语句
var sqlMap = {
    // 用户
    user: {

    },
    //博客
    blog:{
      blogList: 'select * from article_record order by addtime desc',
      add: 'insert into article_record(article_title, article_content, author ,big_type_id, big_type_name, small_type_id, small_type_name) values (?, ?, ?, ?, ?, ?, ?)'
    }
}
module.exports = sqlMap;
