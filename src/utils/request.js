import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000,
});
service.interceptors.request.use(); // 请求拦截器
service.interceptors.response.use(); // 响应拦截器
export default service;
