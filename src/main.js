/* eslint-disable no-new */
import './assets/css/reset.less';
// import './assets/css/common.less';
import $ from './assets/js/libcore.js';
import libDom from './assets/js/libdom.js';
import libEvent from './assets/js/libevent.js';
import FastClick from './assets/js/fastclick.js';
import Flexible from './assets/js/flexible.js';
import Vue from 'vue';
import VueRouter from 'vue-router';
import vueResource from 'vue-resource';
// import page
import Home from './views/index/index.js';


FastClick.attach(document.body);
libDom($);
libEvent($);
window.$ = $;
Vue.use(VueRouter);
Vue.use(vueResource);
let App = Vue.extend({});
let router = new VueRouter();

//匹配路由
router.map({
    '/home': {
        name: 'home',
        component: Home
    }
    // '/handbook': {
    //     name: 'handbook',
    //     component: HandBook
    // }
});

// map中不匹配的路由规则都跳转到index
router.redirect({
    '*': '/home'
});

router.start(App, '#app'); 