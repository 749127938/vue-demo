import VueRouter from 'vue-router'; // 导入路由插件
import Vue from 'vue'
import routes from './router';
import store from "@/store";
import { setTitle } from "@/utils"
Vue.use(VueRouter); // 使用vue插件
const router = new VueRouter({
    // 配置路由
    routes,
    mode: "history",
})
router.afterEach((to, from) => {
    setTitle.setRouterTitle(to.meta.title)
        //(store.state.setting.data);
});

export default router;