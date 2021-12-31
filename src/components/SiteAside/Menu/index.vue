<template>
    <nav class="menu-container">
        <RouterLink :to="{name:item.name}" :class="{active:urls(item)}" :exact="item.exact"  v-for="item in items" :key="item.name">
            <div>
                <Icon :type="item.icon" />
            </div>
            <span>{{item.title}}</span>
        </RouterLink>
    </nav>
</template>

<script>
    import Icon from "../../Icon"
    export default {
        data() {
            return {
                items: [{
                    name: "Home",
                    link: "/",
                    title: "首页",
                    icon: "home",
                    exact:true
                }, {
                    name: "Blog",
                    link: "/article",
                    title: "文章",
                    icon: "blog",
                    exact: false, // 激活状态是否要精准匹配
                }, {
                    name: "About",
                    link: "/about",
                    title: "关于我",
                    icon: "about",
                    exact:true
                }, {
                    name: "Project",
                    link: "/project",
                    title: "项目&效果",
                    icon: "code",
                    exact:true
                }, {
                    name: "Message",
                    link: "/message",
                    title: "留言板",
                    icon: "chat",
                    exact:true
                }]
            }
        },
        components: {
            Icon
        },
        methods: {
            urls(item){
               let link = item.link.toLowerCase(); // 菜单的链接地址
                let curPathname = location.pathname.toLowerCase(); // 当前浏览器的访问路径
                if (item.startWith) {
                    // startsWith检查是否以路径开头
                    return curPathname.startsWith(link);
                } else {
                    return curPathname === link;
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .menu-container {
        color: #b4b8bc;
        margin: 24px 0;
        a{
            padding: 0 50px;
            display: block;
            display: flex;
            align-items: center;
            height: 45px;
            &.router-link-active{
                background: #2f2f2f;
            }
            &:hover{
                color: #fff; 
            }
            div{
                width: 24px;
            }
        }
    }
</style>