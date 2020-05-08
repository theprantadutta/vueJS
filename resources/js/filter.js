//Moment JS
const moment = require('moment');
import Vue from 'vue'
Vue.filter('timeformat',(arg)=>{
    return moment(arg).format("MMM Do YYYY");
});

Vue.filter('shortLength', function (text, length, suffix) {
    return text.substring(0, length)+suffix;
})
