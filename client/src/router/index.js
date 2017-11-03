import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Resource from '@/components/StudentsResource/Resource'
import CreateResource from '@/components/StudentsResource/CreateResource'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/resources/add',
      name: 'CreateResource',
      component: CreateResource
    },
    {
      path: '/resources/:id',
      props: true,
      name: 'Resource',
      component: Resource
    }
  ],
  mode: 'history'
})
