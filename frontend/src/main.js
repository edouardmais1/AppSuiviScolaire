import { createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCookies from 'vue3-cookies';



const app = createApp(App);
import AOS from "aos";
import "aos/dist/aos.css";
app.AOS = new AOS.init({ disable: "phone" });



createApp(App).use(router).use(store).use(VueCookies,{expireTimes: 60 * 60 * 24 }).mount('#app');