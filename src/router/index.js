import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/Index'
import Demo from '../pages/Demo'
import Drag from '../pages/Drag'
import Basics from '../pages/Basics'
import Chart from '../pages/Chart'
import Form from '../pages/Form'

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
    },
     {
      path: '/basics',
      name: 'Basics',
      component: Basics
    },{
      path: '/chart',
      name: 'Chart',
      component: Chart
    },{
      path: '/form',
      name: 'Form',
      component: Form
    }
  ]
})
