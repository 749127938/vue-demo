import Vuex from 'vuex';
import Vue from 'vue';
import setting from './setting';
import banners from './banners'
import about from './about'
Vue.use(Vuex)
const store = new Vuex.Store({
    // strict: true, // 开启严格模式
    modules: {
        setting,
        banners,
        about
    }
})


window.store = store;
export default store;