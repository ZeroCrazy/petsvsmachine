import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// MULTILENGUAJE
import i18n from "./i18n/i18n";

// CSS
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
// import Oruga from '@oruga-ui/oruga-next'
// import '@oruga-ui/oruga-next/dist/oruga-full.css'

import 'bulma/css/bulma.css'
import 'animate.css/animate.css'  // you need to require the css somewhere

// STYLES GLOBALES
import '@/css/transitions.scss'
import '@/css/styles.scss'

// INICIALIZAR APP
const app = createApp(App);
app.use(i18n);
app.use(store);
app.use(router);
app.use(Antd);
// app.use(Oruga);

app.mount('#app');