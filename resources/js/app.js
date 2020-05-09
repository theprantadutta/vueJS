
require('./bootstrap');

window.Vue = require('vue');
//VueX
import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);
import storeData from './store/index';
const store = new Vuex.Store(
    storeData
);
window.store = store;

//Filter JS
import {filter} from './filter'
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

//MarkDown Editor
import 'v-markdown-editor/dist/v-markdown-editor.css';

import Editor from 'v-markdown-editor'

// global register
Vue.use(Editor);


Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-main', require('./components/admin/AdminMaster.vue').default);

//v-form


import { Form, HasError, AlertError } from 'vform'

Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);
window.form = Form;

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'hash'
});

const app = new Vue({
    el: '#app',
    store,
    router
});
