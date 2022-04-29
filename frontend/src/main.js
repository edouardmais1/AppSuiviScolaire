import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';


const app = createApp(App);
import AOS from "aos";
import "aos/dist/aos.css";
app.AOS = new AOS.init({ disable: "phone" });


createApp(App).use(router).use(store).mount('#app')