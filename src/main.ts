import { createApp } from 'vue';
import WebApp from '@twa-dev/sdk'
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import router from './router';

import '@/assets/styles/global.scss'
import 'primevue/resources/themes/aura-light-green/theme.css'

WebApp.ready();


console.log(WebApp);

const app = createApp(App);
app.use(PrimeVue);
app.use(createPinia());
app.use(router);

app.mount('#app');
