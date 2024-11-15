import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';
// createApp(App).mount('#app')

const app = createApp(App);

app.use(Antd).mount("#app");