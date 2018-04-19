<template>
  <div id="login">
    <h1>{{title}}</h1>
    <form action="" v-if="!submited">
      <label>账号：</label>
      <input type="text" v-model="user.account" required />
      <label>密码：</label>
      <input type="password" v-model="user.password"  required>
      <!--prevent关键字，阻止刷新页面-->
      <button v-on:click.prevent="login">登录</button>
      <!--<button type="reset">重置</button>-->
    </form>
  </div>
</template>

<script>
//import  axios from "axios";
export default {
  name: 'add-blog',
  data () {
    return {
      title: "登录",
      user:{
        account: "",
        password: ""
      },
      authors:["Samson","Niuniu","Xiaodong"],
      submited: false
    }
  },
  methods:{
    login: function () {
      //https://jsonplaceholder.typicode.com
      this.$axios.post("/api/user/login",{
        account: this.user.account,
        password: this.user.password
      }).then((data) => {
        console.log(data)
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #login *{
    box-sizing: border-box;
  }
  #login{
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
  h3{
    margin-top: 10px;
  }
</style>
