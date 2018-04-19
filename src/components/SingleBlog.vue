<template>
  <div id="single-blog">
    <h1>{{blog.article_title}}</h1>
    <p class="info">分类：{{blog.big_type_name}} -- {{blog.small_type_name}} &emsp;发表时间： <i class="time">{{blog.addtime | timeFilter}}</i></p>
    <article>{{blog.article_content}}</article>
    <p class="author">{{blog.author}}</p>
  </div>
</template>

<script>
export default {
  name: 'single-blog',
  data () {
    return {
      id: this.$route.params.id,//获取传过来的id
      ss: this.$route.params.aa,
      blog:{}
    }
  },
  created(){
    var _this = this;
    this.$axios.post("/api/blog/detail",{
      id: this.id,
    }).then((data) => {
        //console.log(data)
      console.log(this.ss)
        if(data.data){
          //使用axios会改变this的指向，这里使用es6箭头函数改回this指向
          this.blog = data.data[0];
        }
      })
  },
  filters: {
    'timeFilter':function(value) {
      //console.log(value)
      if (value) {
        return value.slice(0, 10);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #single-blog{
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px dotted #aaa;
  }
  h1{
    font-size: 30px;
    padding: 0px 0 30px;
    border-bottom: 1px solid #ccc;
    margin: 0;
    color: #000;
  }
  article{
    line-height: 30px;
    font-size: 16px;
  }
  .time{
    font-size: 16px;
  }
  .author{
    text-align: right;
  }
  p{
    margin: 10px 0;
  }
</style>
