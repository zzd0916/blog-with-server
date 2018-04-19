<template>
  <div id="app">
    <!--<AddBlog></AddBlog>-->
    <!--<show-blogs></show-blogs>-->
    <BlogHeader></BlogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from "./components/ShowBlogs.vue";
import BlogHeader from "./components/BlogHeader.vue";
import test from "./components/test.vue";

export default {
  name: 'App',
  components: {
    ShowBlogs,
    AddBlog,
    BlogHeader,
    test
  }
}
</script>

<style>
  body{
    background: #75c2cd;
  }
#app {
  background: #75c2cd;
}
</style>
