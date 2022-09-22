import axios from "axios"
import {ElMessage} from "element-plus";
import {diffTokenTime} from "@/util/auth";
// import {useStore} from "vuex";
import store from "@/store";

const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

// 请求拦截器，将结果token放到header上
service.interceptors.request.use(
    config => {
        console.log('interceptors request url', config.url)
        // 判断token是否有效过期
        // const token = localStorage.getItem('token');
        const token = store.getters.token;
        if (token && diffTokenTime()) {
            // 执行登出操作
            store.dispatch('app/logout');
            return Promise.reject(new Error('token 过期了'))
        }
        config.headers.Authorizatioin = token;
        return config;
    },
    (error => {
        return Promise.reject(new Error(error))
    }))

// 响应拦截器
service.interceptors.response.use((response) => {
        console.log(response)
        const {data, meta} = response.data;
        if (meta.status === 200 || meta.status === 201) {
            return data;
        } else {
            ElMessage.error(meta.msg)
            return Promise.reject(new Error(meta.msg))
        }
    },
    error => {
        error.response && ElMessage.error(error.response.data);
        return Promise.reject(new Error(error.response.data))
    })

export default service