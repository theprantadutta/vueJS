
require('./bootstrap');

window.Vue = require('vue');

import Vue from 'vue';
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import {routes} from "./routes";

//Sweet Alert 2
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
//const Swal = require('sweetalert2')
window.Swal = Swal;
const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

window.Toast = Toast;

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
