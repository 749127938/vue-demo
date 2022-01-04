// 这是滚动条的混合
export default function(dom) {
    return {
        mounted() {
            // 监听setMainScroll事件
            this.$bus.$on('setMainScroll', this.handleScrollTop)
                // 给容器注册一个滚动条事件
            this.$refs[dom].addEventListener('scroll', this.handleScroll)
        },
        // 组件销毁时事件也要注销掉
        beforeDestroy() {
            this.$bus.$off('setMainScroll', this.handleScrollTop);
            // 组件销毁的时候触发一次事件 否则top组件一直存在
            this.$bus.$emit("mainscroll");
            // 给容器添加滚动条事件进行监听
            this.$refs[dom].addEventListener("scroll", this.handleScroll);
        },
        methods: {
            // 当滚动条滚动触发这个函数
            handleScroll() {
                // 触发mainscroll事件 判断有没有到约定位置显示top
                this.$bus.$emit("mainscroll", this.$refs[dom])
            },
            // 点击滚动条回到顶部触发
            handleScrollTop() {
                // 容器滚动条回到顶部
                this.$refs[dom].scrollTop = top;
            },
        }
    }
}