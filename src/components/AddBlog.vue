<template>
  <div id="add-blog">
    <h1>{{title}}</h1>
    <form action="" v-if="!submited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required />
      <div class="classes">
        <label for="simple">随笔 </label>
        <input type="checkbox" id="simple" value="simple" v-model="blog.categories"  />
        <label for="interesting">趣事 </label>
        <input type="checkbox" id="interesting"  value="interesting" v-model="blog.categories"  />
        <label for="technology">技术 </label>
        <input type="checkbox" id="technology" value="technology" v-model="blog.categories"  />
        <label for="other">其他 </label>
        <input type="checkbox" id="other"  value="other"v-model="blog.categories"  />
      </div>
      <label>博客内容</label>
      <textarea v-model="blog.content" cols="30" rows="10"></textarea>
      <div class="author">
        <label>作者</label>
        <select v-model="blog.author">
          <option v-for="author in authors" :key="author">
            {{author}}
          </option>
        </select>
      </div>
      <!--prevent关键字，阻止刷新页面-->
      <button v-on:click.prevent="post">发表</button>

      <!--<button type="reset">重置</button>-->
    </form>
    <div v-if="submited">
      <h3>您的博客发布成功！</h3>
    </div>
    <div class="preview">
      <h3>博客预览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：</p>
      <p>{{blog.content}}</p>
      <p>博客分类：</p>
      <ul>
        <li v-for="category in blog.categories">
          {{category}}
        </li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
//import  axios from "axios";
export default {
  name: 'add-blog',
  data () {
    return {
      title: "添加博客",
      blog:{
        title: "",
        content: "",
        categories:[],
        author:""
      },
      authors:["Samson","Niuniu","Xiaodong"],
      submited: false
    }
  },
  methods:{
    post: function () {
      //https://jsonplaceholder.typicode.com
      this.$axios.post("/api/blog/add",{
        article_title: this.blog.title,
        article_content: this.blog.content,
        author: this.blog.author,
        big_type_id: 2,
        big_type_name: "随笔",
        small_type_id: 2,
        small_type_name: "趣事"
      }).then((data) => {
        this.submited = true;
        //console.log(data)
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
    margin: 20px auto;
    max-width: 800px;
    padding: 20px;
    background: #fff;
    border-radius: 10px;
    box-sizing: border-box;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
  }
  .classes label{
    display: inline-block;
    margin-top: 0;
  }
  .classes input{
    display: inline-block;
    margin-right: 10px;
  }
  button{
    display: block;
    margin: 10px 0;
    background: crimson;
    color: #fff;
    border: 0;
    border-radius: 4px;
    padding: 14px;
    font-size: 18px;
    cursor: pointer;
  }
  .preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
  textarea{
    height:200px;
  }
  .preview p{
    margin-top: 10px;
  }
  h1{
    margin: 0;
  }
</style>
