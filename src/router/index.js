import { createRouter, createWebHistory ,createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import FormSample from '@/components/dynamicForm/FormSample.vue'
import DashBoard from '@/components/DashBoard.vue'
import Login from '@/components/Login.vue'
import OtherTest from '@/components/OtherTest.vue'
import TableTest from '@/components/TableTest.vue'
import TableSelect from '@/components/TableSelect.vue'

const routes = [
  // {
  //   path: '/test',
  //   name: 'FormSample',
  //   component: FormSample
  // },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'TableSelect',
    component: TableSelect
  },
  {
    path: '/',
    name: '模板',
    component: DashBoard,
    children:[
      { 
        path:'dynamicform',
        name: '動態表單',
        component: FormSample,
        // meta: { requiresAuth: true }, // 登入控管
      },
      { 
        path:'othertest',
        name: '其他測試',
        component: OtherTest,
      },
      {
        path:'table',
        name: 'table表單',
        component: TableTest,
      },
    ],
  },
  {
    path: '/login',
    name: '登入測試',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component:About,
    meta: { requiresAuth: true }, // 登入控管
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.VUE_APP_BASE_URL), // 這個有值呼叫axios會壞
  // history: createWebHistory(process.env.BASE_URL), // 這個是好的
  routes
})

export default router
