import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import '@/styles/index.scss'
import SvgIcon from '@/icons'
import store from './store'

const app = createApp(App)
SvgIcon(app)
app.use(ElementPlus, {
    locale: zhCn
})
app.use(router).use(store).mount('#app')
