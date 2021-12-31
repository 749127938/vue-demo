import VueRouter from 'vue-router'; // 导入路由插件
import Vue from 'vue'
Vue.use(VueRouter); // 使用vue插件
import Home from '@/views/Home';
import About from '@/views/About';
import Message from '@/views/Message';
import Blog from '@/views/Blog';
import Project from '@/views/Project';
import BlogDetail from "@/views/Blog/Detail";

const router = new VueRouter({
    // 配置路由
    routes: [
        // 当匹配到路径 /Home 时，渲染 Foo 组件
        { name: "Home", path: '/', component: Home },
        // 当匹配到路径 /About 时，渲染 About 组件
        { name: "About", path: '/About', component: About },
        // 当匹配到路径 /Message 时，渲染 Message 组件
        { name: "Message", path: '/Message', component: Message },
        // 当匹配到路径 /Blog 时，渲染 Blog 组件
        { name: "Blog", path: '/article', component: Blog },
        { name: "CategoryBlog", path: '/article/cate/:categoryId', component: Blog },
        { name: "Detail", path: '/article/:id', component: BlogDetail },
        // 当匹配到路径 /Project 时，渲染 Project 组件
        { name: "Project", path: '/Project', component: Project }
    ],
    mode: "history",
})

export default router;