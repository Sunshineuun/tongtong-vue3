import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import '@/styles/index.scss'
import SvgIcon from '@/icons'
import store from './store'
import '@/router/permission'
import * as ElIcon from '@element-plus/icons-vue'

const app = createApp(App)
// 将element-plus icons 注册为全局组件，并已iconName为key
for (const iconName in ElIcon) {
    app.component(iconName, ElIcon[iconName]);
}
SvgIcon(app)
app.use(ElementPlus, {
    locale: zhCn
})
app.use(router).use(store).mount('#app')
