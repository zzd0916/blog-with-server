<template>
  <nav id="blogs-header">
    <ul>
      <li>
        <!--exact为取消切换样式-->
        <router-link to="/" exact>博客</router-link>
        <router-link to="/add" exact>写博客</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'blog-header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #blogs-header{
    padding: 40px 0;
    background: #da3636;
    text-align: center;
  }
  a{
    font-size: 18px;
    text-decoration: none;
    padding: 20px;
    color: #fff;
  }
  .router-link-active{
    background: rgba(255,255,255,0.8);
    color: #444;
    border-radius: 5px;
  }
  ul li{
    list-style: none;
  }
</style>
