import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import test from './components/test.vue'
import SingleBlog from './components/SingleBlog.vue'
//导出一个配置数组
export default [
  {path: '/',component: ShowBlogs},
  {path: '/add',component: AddBlog},
  {path: '/blog/:id',component: SingleBlog},
  {path: '/test',component: test},
]
