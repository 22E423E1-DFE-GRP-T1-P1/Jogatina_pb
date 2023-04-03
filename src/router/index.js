import { createRouter, createWebHistory} from 'vue-router'


import Loja from '../components/LojaComponent.vue'
import Sobre from '../components/SobreComponent.vue'
import product from '../components/ProductComponent.vue'
import avaliacao from '../components/AvaliacaoComponent.vue'
import validacao from '../components/ClassificadosValidationComponent.vue'
import classificados from '../components/ClassificadosComponent.vue'
import NotFound from '../components/NotFound.vue'
import login from '../components/LoginComponent.vue'
import { auth } from '../firebase'


const routes = [ {
        path: '/',
        name:'home',
        component: Loja
},
{
    path:'/sobre',
    nome: 'sobre',
    component: Sobre
},{
    path:'/produto',
    nome: 'produto',
    component: product
},
{
    path:'/classificadosLogin',
    nome: 'classificadosLogin',
    component: validacao
},
{
    path:'/login',
    nome:'login',
    component:login
},{
  path:'/classificados',
  nome:'classificados',
  component:classificados
},
{
  path:'/avaliacao',
  nome:'avaliacao',
  component:avaliacao
},{
  path: '/:catchAll(.*)',
  component: NotFound
}
];

const router = createRouter({
    history:createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }
  if (to.path === '/classificadosLogin' && auth.currentUser) {
    next('/classificados')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }
  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/classificadosLogin')
    return;
  }


  next();
})

export default router;