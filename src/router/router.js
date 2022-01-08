import Home from '@/views/Home';
import About from '@/views/About';
import Message from '@/views/Message';
import Blog from '@/views/Blog';
import Project from '@/views/Project';
import BlogDetail from "@/views/Blog/Detail";
export default [
    // 当匹配到路径 /Home 时，渲染 Foo 组件
    {
        name: "Home",
        path: '/',
        component: Home,
        meta: {
            title: '首页'
        }
    },
    // 当匹配到路径 /About 时，渲染 About 组件
    {
        name: "About",
        path: '/About',
        component: About,
        meta: {
            title: '关于我'
        }
    },
    // 当匹配到路径 /Message 时，渲染 Message 组件
    {
        name: "Message",
        path: '/Message',
        component: Message,
        meta: {
            title: '留言板'
        }
    },
    // 当匹配到路径 /Blog 时，渲染 Blog 组件
    {
        name: "Blog",
        path: '/article',
        component: Blog,
        meta: {
            title: '文章'
        }
    },
    // 当匹配到路径 /article/cate/:categoryId 时，渲染 Blog 组件
    {
        name: "CategoryBlog",
        path: '/article/cate/:categoryId',
        component: Blog,
        meta: {
            title: '文章分类'
        }
    },
    // 当匹配到路径 /article/:id 时，渲染 BlogDetail 组件
    {
        name: "Detail",
        path: '/article/:id',
        component: BlogDetail,
        meta: {
            title: '文章详情'
        }
    },
    // 当匹配到路径 /Project 时，渲染 Project 组件
    {
        name: "Project",
        path: '/Project',
        component: Project,
        meta: {
            title: '项目&效果'
        }
    }
]