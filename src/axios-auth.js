import axios from 'axios';

//针对多个不同配置的请求，实例化不同的axios
const instance = axios.create({
  baseURL: "http://www.zzdblog.cn"
})

//instance.defaults.headers.common["SOMETHING"] = "SOMETHING";

export default instance;
//使用方式 import name form "aaxios-auth"
