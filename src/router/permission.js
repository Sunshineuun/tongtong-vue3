// 使用路由守卫，只有登录之后才能进行访问
import router from './index';
import store from '@/store'

const whiteList = ['/login']
router.beforeEach((to, from, next) => {
    console.log(to.path)
    if (store.getters.token) {
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