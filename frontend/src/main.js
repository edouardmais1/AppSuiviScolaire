import { createApp } from 'vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

//importer un composant Vue
import App from './App.vue'

createApp(App).mount('#app')


Vue.use(VueRouter)

Vue.config.productionTip = false



//---> ALLER VOIR SUR LE SITE ET ESSAYER DE TILTER MAIS SUREMENT EN RAPPORT AVEC LES <ROUTER-LINK DANS LES FICHIERS VUE DE L'EXEMPLE
const routes = [
  /*{
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit/:id',
    component: Edit
  },
  {
    name: 'Index',
    path: '/',
    component: Index
  },*/
];


const router = new VueRouter({ mode: 'history', routes: routes })

new Vue({
  // init router
  router,
  render: h => h(App),
}).$mount('#app')
