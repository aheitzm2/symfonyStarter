// ./assets/js/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';

// app specific
import router from './router/';
import app from './app.vue';

Vue.use(VueRouter);

// bootstrap the app
let demo = new Vue({
    el: '#app',
    router,
    template: '<app/>',
    components: { app }
});

