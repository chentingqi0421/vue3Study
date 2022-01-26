import { createApp } from 'vue'
import App from './App.vue'
//导入vuex状态管理器
import store from './store'
//导入vue-router路由
import router from './router'
//导入ElementPlusUI 
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
