import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import CalendrierPage from '../components/CalendrierPage.vue'
import ComportementPage from '../components/ComportementPage.vue'
import BulletinPage from '../components/BulletinPage.vue'
import ContactPage from '../components/ContactPage.vue'
import InscriptionPage from '../components/InscriptionPage.vue'
import ConnexionPage from '../components/ConnexionPage.vue'
import SecretariatPage from '../components/SecretariatPage.vue'
import SecretariatActualites from '../components/SecretariatActualites.vue'
import SecretariatClasses from '../components/SecretariatClasses.vue'
import SecretariatEleves from '../components/SecretariatEleves.vue'


const routes = [

    {
        path:'/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path:'/calendrier',
        name: 'CalendrierPage',
        component: CalendrierPage
    },
    {
        path:'/comportement',
        name: 'ComportementPage',
        component: ComportementPage
    },
    {
        path:'/bulletin',
        name: 'BulletinPage',
        component: BulletinPage
    },
    {
        path:'/contact',
        name: 'ContactPage',
        component: ContactPage
    },
    {
        path:'/secretariat',
        name: 'SecretariatPage',
        component: SecretariatPage
    },
    {
        path:'/secretariat/actualites',
        name: 'SecretariatActualites',
        component: SecretariatActualites
    },
    {
        path:'/secretariat/eleves',
        name: 'SecretariatEleves',
        component: SecretariatEleves
    },
    {
        path:'/secretariat/classes',
        name: 'SecretariatClasses',
        component: SecretariatClasses
    },
    {
        path:'/inscription',
        name: 'InscriptionPage',
        component: InscriptionPage
    },
    {
        path:'/connexion',
        name: 'ConnexionPage',
        component: ConnexionPage
    }

]

const router = createRouter({
    history : createWebHistory(process.env.BASE_URL),
    routes
})

export default router