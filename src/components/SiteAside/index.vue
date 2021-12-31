<template>
  <div class="siteaside-container">
      <Avatar :size="150" url="http://mdrs.yuanjin.tech/FgMwAPYq17So9nwVH44ltDHo7u3c" />
      <h1 class="title">初夏的小窝</h1>
      <Menu />
      <Contact/>
      <p class="footer"> 黑ICP备17001719号 </p>
  </div>
</template>

<script>
import Avatar from "../Avatar";// 导入头像组件
import Contact from "./Contact";// 导入联系组件
import Menu from "./Menu";// 导入菜单组件
export default {
    // 注册组件
    components: {
        Avatar,// 注册头像组件
        Contact,// 注册联系组件
        Menu,// 注册菜单组件
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