
require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import {routes} from "./routes";

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

//v-form


import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
window.form = Form;

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
});

const app = new Vue({
    el: '#app',
    router
});
