import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/index'
import HelloWorld from '@/components/HelloWorld'
import ThreeMenu from '@/components/ThreeMenu'
import PictureShow from '@/components/pictureShow'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/index',
    name: 'index',
    component: Index,
    children:[
    {
      path:'/test',
      name:'HelloWorld',
      component:HelloWorld
    },
    {
      path:'/dataTransfer',
      name:'ThreeMenu',
      component:ThreeMenu
    },
    {
      path:'/pictureShow',
      name:"pictureShow",
      component:PictureShow
    }
    ]
  },
  ]
})
