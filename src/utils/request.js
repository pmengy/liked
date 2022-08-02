import axios from "axios";
import store from "@/store";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
service.interceptors.request.use((config)=>{
  if (store.state.user.token.token) {
    config.headers.Authorization = 'Bearer ' + store.state.user.token
  }
  return config
}); // 请求拦截器
service.interceptors.response.use(); // 响应拦截器
export default service;
