import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { createPinia } from 'pinia';
import 'virtual:svg-icons-register';
//引入模板的全局的样式
import router from '@/router/index.ts';
import '@/styles/index.scss';
import { createApp } from 'vue';
import App from './App.vue';
import gloablComponent from './components/index.ts';
//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)

const app = createApp(App);
app.use(createPinia()); // 引入Pinia
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(gloablComponent);
app.use(router);
app.mount('#app');
