<template>
  <div v-loading="isLoading" ref="home" class="home-container">
      <ul @transitionend="handleTransitionEnd"  :style="{marginTop}" class="list">
          <li @wheel="handleWheel"  v-for="item in data" :key="item.id" >
              <Carouselitem :items="item" />
          </li>
      </ul>
      <div v-show="index !== 0" @click="newIndex(index -1)" class="icon icon-up">
          <Icon type="arrowUp" />
      </div>
      <div v-show="index !== data.length -1" @click="newIndex(index +1)" class="icon icon-down">
          <Icon type="arrowDown" />
      </div>
      <ul class="circle">
          <li @click="newIndex(i)" :class="{active:index == i}" v-for="(item,i) in data" :key="item.id" ></li>
      </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import Carouselitem from "./Carouselitem.vue";
import banner from "@/api/banner.js";
import fetchData from "@/mixins/featchData.js";
export default {
    mixins: [fetchData([])],
    components: {
        Icon,
        Carouselitem
    },
    data(){
        return {
            index: 0,
            currenHeight: 0,
            switching:false,
        }
    },
    methods: { 
        newIndex(i){
            if(i < 0){
                i = 0;
            }else if(i > this.data.length-1){
                i = this.data.length-1;
            }
            this.index = i;
        },
        async fetchData() {
            return await banner();
        },
        // 鼠标滚轮事件
        handleWheel(e){
            // 判断是否在滚动中
            if(this.switching){
                return
            }
            // 往上滚动
            if (e.deltaY < -5 && this.index > 0) {
                // 往上滚动
                this.switching = true;
                this.index--;
            } else if (e.deltaY > 5 && this.index < this.data.length - 1) {
                // 往下滚动
                this.switching = true;
                this.index++;
            }
            // this.switching = false;
        },
        handleTransitionEnd() {
            this.switching = false;
        },
        handleResize(){
            this.currenHeight = this.$refs.home.clientHeight;
        }
    },
   //  实例创建前
    beforeCreate(){
    },
    // 挂载完成获取页面的高度
    mounted(){
         this.currenHeight = this.$refs.home.clientHeight
         window.addEventListener('resize',this.handleResize)
    },
    destroyed(){
        window.removeEventListener('resize',this.handleResize)
        console.log('销毁');
    },
    computed: {
        marginTop(){
            return -this.index * this.currenHeight + 'px';
        }
    }

}
</script>

<style scoped lang="less">
@import url('~@/styles/mixin.less');
@import url('~@/styles/color.less');
@jump : 5px;
@keyframes jump-up{
    0%{
        transform:translateY(@jump);
    }
    50%{
        transform:translateY(-@jump);
    }
    100%{
        transform:translateY(@jump);
    }
}

@keyframes jump-down{
    0%{
        transform:translateY(-@jump);
    }
    50%{
        transform:translateY(@jump);
    }
    100%{
        transform:translateY(-@jump);
    }
}
    .home-container{
        // 这里由于margin重合了需要用bfc
        overflow:hidden;
        width: 100%;
        height: 100%;
        position: relative;
        // 测试代码
        // width: 600px;
        // height: 400px;
        // border: 2px solid #dac;
        // overflow:visible;
        // margin: 100px auto;
        .loading{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        .list,.list li{
            transition: .5s;
            width: 100%;
            height: 100%;
        }
        .circle{
            .self-center();
            left: auto;
            right: 25px;
            li{
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: #373737;
                cursor: pointer;
                margin-bottom: 10px;
                border: 1px solid #fff;
                box-sizing: border-box;
                &.active{
                    background: #fff;
                }
            }
        }
    }

    .icon{
        color: @gray;
        cursor: pointer;
        .self-center();
        font-size:48px;
        transform: translate(-50%,0);
        &.icon-up{
            animation:jump-up 500ms infinite;
            top: 15px;
        }
        &.icon-down{
            top: auto;
            bottom:15px;
            animation:jump-down 500ms infinite;
        }
    }

    
</style>