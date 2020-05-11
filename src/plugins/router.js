import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Reports from '../views/Reports.vue'
import ReportsCreate from '../views/ReportsCreate.vue'
import ReportTypes from '../views/ReportTypes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    name: 'reports',
    component: Reports
  },
  {
    path: '/reports/create',
    name: 'reports.create',
    component: ReportsCreate
  },
  {
    path: '/report/types',
    name: 'report.types',
    component: ReportTypes
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
