import { createApp } from 'vue';
import App from './App';
import router from './routes'; // index는 생략 가능
import store from './store/index.js';
import loadImage from './plugins/loadImage';

createApp(App)
    .use(router) // 특정 플러그인 연결을 위한 $route, $router
    .use(store) // $store
    .use(loadImage) // $loadImage
    .mount('#app');