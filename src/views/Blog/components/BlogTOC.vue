<template>
  <div class="blogTOC">
      <h1>目录</h1>
      <RightList @changeSelect="changeSelect" :list="tocWithSelect"/>
  </div>
</template>

<script>
import RightList from "./RightList";
import {debounce} from "@/utils"
export default {
    props: {
        toc:{
            type:Array,
            default:()=>[],
        }
    },
    data(){
        return {
            activeAnchor:"",
        }
    },
    computed: {
        // 根据toc属性以及activeAnchor得到带有isSelect属性的数组
        tocWithSelect(){
            // {anchor: "article-md-title-1" name: "概述"}
            // 这里用到递归
            const getToc = (toc=[]) => {
                return toc.map((t)=>({
                    ...t,
                    isSelect:t.anchor === this.activeAnchor,
                    // 通过递归把子类的也设置一遍
                    children:getToc(t.children)
                }))
            }
            return getToc(this.toc);
        },
        // 根据toc获取到他们对应的元素数组
        doms(){
            const doms = [];
            const addDom = toc =>{
                for (const t of toc) {
                    doms.push(document.getElementById(t.anchor))
                    if(t.children && t.children.length){
                        addDom(t.children);
                    }
                }
            }
            addDom(this.toc);
            return doms;
        }
    },
    created(){
        this.newSelect = debounce(this.setActiveAnchor,50)
        this.$bus.$on("mainscroll",this.newSelect)
    },
    // 当组件销毁就不再监听事件
    destroyed(){
        this.$bus.$off("mainscroll",this.newSelect)
    },
    methods: {
        changeSelect(item){
            location.hash = item.anchor;
        },
        /**
         * 设置ActiveAnchor为正确的值
         */
        setActiveAnchor(){
            this.activeAnchor = "";// 由于要重新设置所以要先清空
            // 设置范围大小
            const range = 200;
            for (const dom of this.doms){
                // 判断当前的dom元素是不是要被选中
                if(!dom){
                    continue; // 进入下一次循环
                }
                // getBoundingClientRect 获取元素距离顶边距离
                const top = dom.getBoundingClientRect().top;// 得到元素离顶边高度
                if(top >= 0 && top<=200){
                    // 在规定范围内
                    this.activeAnchor = dom.id;
                    return;
                }else if(top > range){
                    // 在规定范围下方
                    return; // 不做处理
                }else{
                    // 在规定范围上方
                    this.activeAnchor = dom.id; // 如果下方没有符合条件的还是激活自己
                }
            }
        }
    },
    components: {
        RightList,
    }
}
</script>

<style>

</style>