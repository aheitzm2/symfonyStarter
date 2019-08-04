// ./assets/js/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios'
import VueAxios from 'vue-axios'

// app specific

import router from './router/';
import app from './app.vue';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

window.axios = axios;

// bootstrap the app
let demo = new Vue({
    el: '#app',
    router,
    template: '<app/>',
    components: { app }
});

