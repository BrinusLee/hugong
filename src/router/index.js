import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Management from '@/components/Management'


Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/components/Login')), 'login')
const management = r => require.ensure([], () => r(require('@/components/Management')), 'management')
const home = r => require.ensure([], () => r(require('@/components/Home')), 'home')
const companyManagement = r => require.ensure([], () => r(require('@/components/CompanyManagement')), 'companyManagement')
const employeeManagement = r => require.ensure([], () => r(require('@/components/EmployeeManagement')), 'employeeManagement')
const siteManagement = r => require.ensure([], () => r(require('@/components/SiteManagement')), 'siteManagement')
const careWorkerManagement = r => require.ensure([], () => r(require('@/components/CareWorkerManagement')), 'careWorkerManagement')
const financeManagement = r => require.ensure([], () => r(require('@/components/FinanceManagement')), 'financeManagement')
const orderManagement = r => require.ensure([], () => r(require('@/components/OrderManagement')), 'orderManagement')
const nurseVerificationManageMent = r => require.ensure([], () => r(require('@/components/NurseVerificationManageMent')), 'nurseVerificationManageMent')
const addCompany = r => require.ensure([], () => r(require('@/components/addCompany')), 'addCompany')
const addEmployee = r => require.ensure([], () => r(require('@/components/addEmployee')), 'addEmployee')
const addDepartment = r => require.ensure([], () => r(require('@/components/addDepartment')), 'addDepartment')
const addCareWorker = r => require.ensure([], () => r(require('@/components/addCareWorker')), 'addCareWorker')
const addSite = r => require.ensure([], () => r(require('@/components/addSite')), 'addSite')
const viewOrder = r => require.ensure([], () => r(require('@/components/viewOrder')), 'viewOrder')
const verifyNurse = r => require.ensure([], () => r(require('@/components/verifyNurse')), 'verifyNurse')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/management',
      name: 'management',
      component: management,
      children: [
        {
          path: '',
          name: '',
          component: home,
          meta: [],
        },
        {
          path: '/companyManagement',
          name: 'companyManagement',
          component: companyManagement,
          meta: ['公司管理'],
        },
        {
          path: '/employeeManagement',
          name: 'employeeManagement',
          component: employeeManagement,
          meta: ['员工管理'],
        },
        {
          path: '/siteManagement',
          name: 'siteManagement',
          component: siteManagement,
          meta: ['网点管理'],
        },
        {
          path: '/careWorkerManagement',
          name: 'careWorkerManagement',
          component: careWorkerManagement,
          meta: ['护工管理'],
        },
        {
          path: '/financeManagement',
          name: 'financeManagement',
          component: financeManagement,
          meta: ['财务数据'],
        },
        {
          path: '/orderManagement',
          name: 'orderManagement',
          component: orderManagement,
          meta: ['订单管理'],
        },
        {
          path: '/nurseVerificationManageMent',
          name: 'nurseVerificationManageMent',
          component: nurseVerificationManageMent,
          meta: ['护士管理'],
        },
        {
          path: '/addCompany',
          name: 'addCompany',
          component: addCompany,
          meta: ['公司管理','新增公司'],
        },
        {
          path: '/addEmployee',
          name: 'addEmployee',
          component: addEmployee,
          meta: ['员工管理','新增员工'],
        },
        {
          path: '/addDepartment',
          name: 'addDepartment',
          component: addDepartment,
          meta: ['员工管理','新增部门'],
        },
        {
          path: '/addCareWorker',
          name: 'addCareWorker',
          component: addCareWorker,
          meta: ['护工管理','新增护工'],
        },
        {
          path: '/addSite',
          name: 'addSite',
          component: addSite,
          meta: ['网点管理','新增网点'],
        },
        {
          path: '/viewOrder',
          name: 'viewOrder',
          component: viewOrder,
          meta: ['订单管理','订单详情'],
        },
        {
          path: '/verifyNurse',
          name: 'verifyNurse',
          component: verifyNurse,
          meta: ['护士管理','护士审核'],
        }

      ]
    }
  ],
  mode: 'history'
})
