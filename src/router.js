import Vue from 'vue'
import Router from 'vue-router'


import LoginPage from './components/LoginPage.vue'
import TodoList from './components/TodoList.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'LoginPage',
            component: LoginPage
        },
        {
            path: '/todo',
            name: 'TodoList',
            component: TodoList
        },



    ]
})

