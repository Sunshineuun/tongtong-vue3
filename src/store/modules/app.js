import {login as loginApi} from "@/api/login";
import router from '@/router';
import {setTokenTime} from "@/util/auth";

/**
 * 这里有个疑问：当界面被刷新后，state。
 */
export default {
    namespaced: true,
    state: () => ({
        token: localStorage.getItem('token') || ''
    }),
    mutations: {
        setToken(state, token) {
            state.token = token;
            localStorage.setItem('token', token)
        }
    },
    actions: {
        login({commit}, userInfo) {
            return new Promise((resolve, reject) => {
                loginApi(userInfo)
                    .then(res => {
                        console.log(res)
                        commit('setToken', res.token)
                        setTokenTime();
                        router.replace('/')
                        resolve()
                    }).catch(error => {
                    reject(error)
                })
            })
        },
        logout({commit}) {
            // clean token
            commit('setToken', '');
            localStorage.clear();
            // 跳转到登录页面
            router.replace('/login');
        }
    }
}