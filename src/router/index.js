import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Inicio from '../pages/Inicio.vue'
import Nosotros from '../pages/Nosotros.vue'
import Eventos from '../pages/Eventos.vue'
import Contacto from '../pages/Contacto.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Inicio',
      component: Inicio
    },
    {
      path: '/Nosotros',
      name: 'Nosotros',
      component: Nosotros
    },
    {
      path: '/Eventos',
      name: 'Eventos',
      component: Eventos
    },
    {
      path: '/Contacto',
      name: 'Contacto',
      component: Contacto
    }
  ]
})
