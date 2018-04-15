import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ThreeMenu from '@/components/ThreeMenu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path: '/3dMenu',
    	name: '3dMenu',
    	component: ThreeMenu
    }
  ]
})
