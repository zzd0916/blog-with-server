<template>
  <div id="show-blogs">
    <h1>博客总览</h1>
    <input class="search" type="text" v-model="search" placeholder="请输入blog标题">
    <!--key的值不能是一个对象，否则会报错-->
    <div v-theme="'wide'" class="single-blog" v-for="blog in filteredBlogs" :key="blog.title">
      <router-link v-bind:to="'/blog/'+blog.article_id">
        <h2 v-rainbow>{{blog.article_title | to-uppercase}}</h2>
      </router-link>
      <article>
        {{blog.article_content | snippet}}
      </article>
    </div>
  </div>
</template>

<script>
//import  axios from "axios";
export default {
  name: 'show-blogs',
  data () {
    return {
      search:""
    }
  },
  methods:{

  },
  created() {
    //this.$http.get('../../static/posts.json')访问本地json只能放在static目录下
    this.$axios.get("/api/blog/blogList")
      .then((data) => {
        //console.log(data)
        if(data.data){
          this.$store.state.blogs = data.data;
          console.log(this.$state.state.blogs)
        }
      })
      .catch( (error) => {
        //console.log(error);
      });
  },
  computed:{
    //计算属性,搜索blog
    filteredBlogs: function(){
      return this.$store.state.blogs.filter((blog) =>{
        return blog.article_title.match(this.search);
      })
    }
  },
  filters: {
    //本地过滤器
    "to-uppercase": function (value) {
      //转化为大写
      return value.toUpperCase();
    }
  },
  directives:{
    //局部指令，与filters相同
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1{
    font-size: 26px;
    text-align: center;
  }
  #show-blogs *{
    box-sizing: border-box;
  }
  #show-blogs{
    padding: 40px 0;
    max-width: 800px;
    margin: auto;
  }

  .single-blog{
    padding: 20px 10px;
    width: 100%;
    margin: 20px auto;
    background: #fff;
    border-radius: 6px
  }
  h2{
    font-size: 24px;
    margin: 0 0 10px;
  }
  article{
    font-size: 16px;
    line-height: 20px;
  }
  .search{
    margin: 10px 0;
    padding: 0 20px;
    height: 40px;
    line-height:40px;
    width: 100%;
    border: 1px solid #ccc;
  }
  .single-blog:hover{
    background: cornsilk;
  }
  .single-blog a{
    text-decoration: none;
  }
  h1{
    margin: 0;
    color: #000;
  }
</style>
