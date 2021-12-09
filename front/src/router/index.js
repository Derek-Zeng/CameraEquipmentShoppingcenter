import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) 
    return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: Home
   },
   {
    path: '/CameraList',
    name: 'CameraList',
    meta: {
      title: '相机'
    },
    component: () => import('../views/CameraList.vue')
   },
   {
    path: '/FittingList',
    name: 'FittingList',
    meta: {
      title: '相机配件'
    },
    component: () => import('../views/FittingList.vue')
   },
   {
    path: '/RelateService',
    name: 'RelateService',
    meta: {
      title: '相关服务'
    },
    component: () => import('../views/RelateService.vue')
   },
   {
    path: '/RelateInformation',
    name: 'RelateInformation',
    meta: {
      title: '相关咨询'
    },
    component: () => import('../views/RelateInformation.vue')
   },
  {
    path: '/camera/:id',
    name: 'camera',
    meta: {
      title: '相机'
    },
    component: () => import('../views/camera.vue')
  },
  {
    path: '/fitting/:id',
    name: 'fitting',
    meta: {
      title: '相机配件'
    },
    component: () => import('../views/fitting.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
