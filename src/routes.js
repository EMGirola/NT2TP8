import Vue from 'vue';
import VueRouter from 'vue-router';

import UserForm from './components/UserForm.vue';
import RandomUsers from './components/RandomUsers.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/', component: UserForm
        },
        {
            path: '/userform', component: UserForm
        },
        {
            path: '/userlist', component: RandomUsers
        }
    ]
});