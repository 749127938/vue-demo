<template>
  <div ref="container" class="carouselitem-container"
    @mousemove="handleMouseMove"
    @mouseleave="handleMouseLeave"
  >
      <div ref="imgSize"  class="curouse-img" :style="imgPosition">
          <ImageLoader  :src="items.bigImg" :placeholder="items.midImg" @load="this.handleText" />
      </div>
      <div ref="title" class="title">
          {{items.title}}
      </div>
      <div ref="desc" class="desc">
          {{items.description}}
      </div>
  </div>
</template>

<script>
import ImageLoader from "@/components/ImageLoader"
export default {
    components:{
        ImageLoader
    },
    props: {
        items:{},
    },
    data(){
        return {
            titleWidth:0,
            descWidth:0,
            containerSize:null,
            imageSize:null,
            mouseX: 0, // 鼠标的横坐标
            mouseY: 0, // 鼠标的纵坐标
        }
    },
    mounted(){
        this.titleWidth = this.$refs.title.clientWidth;
        this.descWidth = this.$refs.desc.clientWidth;
        this.setSize();
        this.mouseX = this.center.x;
        this.mouseY = this.center.y;
    },
    methods:{
        handleText(){
            // title的动画效果
            this.$refs.title.style.opacity = 1;
            this.$refs.title.style.width = 0;
            this.$refs.title.style.transition = '1s';
            this.$refs.title.clientWidth; // 强制渲染导致回流
            this.$refs.title.style.width = this.titleWidth + 'px';

            this.$refs.desc.style.opacity = 1;
            this.$refs.desc.style.width = 0;
            this.$refs.desc.style.transition = '2s 1s';
            this.$refs.desc.clientWidth; // 强制渲染导致回流
            this.$refs.desc.style.width = this.descWidth + 'px';
        },
        handleMouseMove(e) {
            // 获取容器的尺寸
            const rect = this.$refs.container.getBoundingClientRect();
            this.mouseX = e.clientX - rect.left;
            this.mouseY = e.clientY - rect.top;
        },
        handleMouseLeave() {
            this.mouseX = this.center.x;
            this.mouseY = this.center.y;
        },
        // 获取尺寸函数
        setSize(){
            // 获取容器的宽高
            this.containerSize = {
                width:this.$refs.container.clientWidth,
                height:this.$refs.container.clientHeight
            }
            // 获取图片的宽高
            this.imageSize = {
                width:this.$refs.imgSize.clientWidth,
                height:this.$refs.imgSize.clientHeight
            }
        }
    },
    computed: {
        imgPosition() {
            if(!this.containerSize || !this.imageSize){
                return;
            }

            let extraWidth = this.containerSize.width - this.imageSize.width;// 多出的宽度
            let extraHeight = this.containerSize.height - this.imageSize.height;// 多出的高度
            let left = (extraWidth / this.containerSize.width) * this.mouseX;// 相差的距离
            let top = (extraHeight / this.containerSize.height) * this.mouseY;// 相差的距离

            return {
                transform: `translate(${left}px,${top}px)`
            }
        },
        center() {
            return{
                x:this.containerSize.width / 2,
                y:this.containerSize.height / 2
            }
        }
    },
    
}
</script>

<style lang="less" scoped>
@import url("~@/styles/color.less");
    .carouselitem-container{
        position:relative;
        width:100%;
        height:100%;
        overflow:hidden;
        .curouse-img{
            width:110%;
            height:110%;
            z-index: -1;
            position: absolute;
            left: 0;
            top: 0;
            transition: 0.3s;
        }
        .title,.desc{
            position:absolute;
            left:30px;
            color: #fff;
            white-space: nowrap;
            overflow: hidden;
            opacity:0;
            text-shadow: 1px 0 0 rgba(0,0,0,0.5), -1px 0px 0 rgba(0,0,0,0.5),0px 1px 0 rgba(0,0,0,0.5),0px -1px 0 rgba(0,0,0,0.5);
        }
        .title{
            font-size:2em;
            // 属性用于设置文本字符的间距表现。
            letter-spacing: 4px;
            top: calc(50% - 40px);
        }
        .desc{
            top: calc(50% + 20px);
            font-size:1.2em;
            color: lighten(@gray,15%);
        }

    }
</style>