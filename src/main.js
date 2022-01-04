import Vue from 'vue'; // 导入vue实例
import App from './App.vue'; // 导入APP组件
import "@/styles/global.less"; // 导入全局样式
import router from './router/index.js'; // 导入vue的路由插件(router)
import { showMessage } from "./utils/"; // 导入消息弹窗
import "./mock"; // 运行mock文件
import "@/api/banner.js"; // 运行api的banner文件
import "@/api/news.js"; // 运行api的news文件

import "./eventBus"
// 把showMessage 加入到vue的实例成员
Vue.prototype.$showMessage = showMessage;

// 导入并且注册指令
import loading from "@/directive/loading.js"
import lazy from "@/directive/lazy.js"
Vue.directive('loading', loading)
Vue.directive('lazy', lazy)
new Vue({
    router, // 路由匹配规则
    render: h => h(App),
}).$mount('#app')



// 测试blog
// 随便测试一下
import * as blogApi from "./api/blog.js";
// blogApi.getBlogType().then((r) => {
//     console.log("博客分类", r);
// });

// blogApi.getBlog(2, 10, 3).then((r) => {
//     console.log("博客", r);
// });
// blogApi.getBlogId(1).then((r) => {
//     console.log("单个博客", r);
// });

// blogApi.postBlog({
//     nickname: "昵称",
//     content: "评论内容，纯文本",
//     blogId: "123",
// }).then((r) => {
//     console.log("提交评论", r);
// });

// blogApi.getBlogComment('123123').then((r) => {
//     console.log("单个博客的评论", r);
// });