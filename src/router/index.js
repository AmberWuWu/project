import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Demo from '../pages/Demo'
import Drag from '../pages/Drag'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
     {
      path: '/demo',
      name: 'Demo',
      component: Demo
    },
     {
      path: '/drag',
      name: 'Drag',
      component: Drag
    }
  ]
})
