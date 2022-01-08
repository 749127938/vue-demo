<template>
  <div class="siteaside-container">
     <template v-if="data">
        <Avatar :size="150" :url="data.avatar" />
        <h1 class="title">{{data.siteTitle}}</h1>
     </template>
      <Menu />
      <Contact v-if="data"/>
      <p v-if="data" class="footer">{{data.icp}} </p>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import Avatar from "../Avatar";// 导入头像组件
import Contact from "./Contact";// 导入联系组件
import Menu from "./Menu";// 导入菜单组件
import awatarLogo from "@/assets/awatar.png"
export default {
    // 注册组件
    components: {
        Avatar,// 注册头像组件
        Contact,// 注册联系组件
        Menu,// 注册菜单组件
    },
    created(){
        this.$store.dispatch('setting/getSetting')
    },
    computed:{
        ...mapState('setting',{
            data:state=> state.data,
            loading:state=> state.loading,
        })
    },
    methods: {
        awatarLogo(){
            return awatarLogo;
        }
    }
}
</script>

<style lang='less'>
    .siteaside-container{
        // border-radius: 105px;
        width: 100%;
        height: 100%;
        background: #202020;
        padding: 20px 0;
        box-sizing: border-box;
        overflow-x: hidden;
        overflow-y: auto;
        .avatar-container{
            margin: 0 auto;
        }
        .title{
            font-size: 1.2em;
            color: #fff;
            text-align: center;
        }
        .footer{
            text-align: center;
            font-size: 12px;
        }
    }
</style>