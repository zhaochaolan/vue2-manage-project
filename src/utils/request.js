import axios from 'axios'

//封装原因 统一设置超时时间、请求头、根据项目环境更换请求地址，错误统一处理
//创建axios实例

const service = axios.create({
    baseURL:process.env.NODE_ENV === 'production'?process.env.VUE_APP_BASE_APT:'/',
    timeout:5000
})

//添加请求拦截器
service.interceptors.request.use(config => {
    //在发送请求之前做什么
    config.headers['Authorization'] = 'token';
    config.headers['Content-Type'] = 'application/json';
    return config
},error => {
    Promise.reject(error)
})

//添加响应拦截器
service.interceptors.response.use(response => {
    //对响应的数据做点什么
    const res = response.data
    if(!res.code) return res
    else {
        if(res.code === 5000) {
            console.log()
        }
        return res
    }

},error => {
    return Promise.reject(error)
})

export default service