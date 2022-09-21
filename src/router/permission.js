// 使用路由守卫，只有登录之后才能进行访问
import router from './index';
import store from '@/store'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
    console.log(store.getters.token)
    // const token = window.localStorage.getItem('token')
    const token = store.getters.token
    if (token) {
        if (to.path === '/login') {
            next('/')
        } else {
            next()
        }
    } else {
        if (whiteList.includes(to.path)) {
            next();
        } else {
            next('/login')
        }
    }
})