import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { onClickOutside } from '@/directives';

const app = createApp(App);

app.use(router);

// Register directives
app.directive('click-outside', onClickOutside);

app.mount('#app');
