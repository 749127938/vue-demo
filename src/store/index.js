import Vuex from 'vuex';
import Vue from 'vue';
import setting from './setting';
import banners from './banners'
import about from './about';
import project from './project';
Vue.use(Vuex)
const store = new Vuex.Store({
    // strict: true, // 开启严格模式
    modules: {
        setting,
        banners,
        about,
        project
    }
})


window.store = store;
export default store;