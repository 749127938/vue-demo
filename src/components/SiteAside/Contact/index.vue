<template>
        <ul class="contact-cantainer">
            <li>
                <a :href="data.github">
                    <div>
                         <Icon type="github" />
                    </div>
                    <span>{{data.githubName}}</span>
                </a>
                
            </li>
            <li>
               <a :href="`mailto:${data.mail}`">
                    <div>
                         <Icon type="mail" />
                    </div>
                    <span>{{data.mail}}</span>
                </a>
            </li>
            <li>
               <a href="tencent://message/?Menu=yes&uin=749127938&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
                    <div>
                         <Icon type="qq" />
                    </div>
                    <span>{{data.qq}}</span>
                </a>
                <div class='pop'>
                    <img :src="data.qqQrCode" alt="">
                </div>
            </li>
            <li>
               <a href="">
                    <div>
                         <Icon type="weixin" />
                    </div>
                    <span>{{data.weixin}}</span>
                </a>
                <div class='pop'>
                    <img :src="data.weixinQrCode" alt="">
                </div>
            </li>
        </ul>
</template>

<script>
// import {mapState} from 'Vuex';
import Icon from "../../Icon";// 导入图标组件
import {mapState} from 'vuex'
export default {
    // 注册Icon组件
    components: {
        Icon
    },
    created(){
        this.$store.dispatch('setting/getSetting')
    },
    computed: {
        ...mapState('setting',{
            data:state=>state.data,
        })
    }
}
</script>

<style scoped lang='less'>
    .contact-cantainer{
        list-style: none;
        padding: 20px;
        margin: 0;
        color: #b4b8bc;
        li {
            height: 30px;
            line-height: 30px;
            margin: 14px 0;
            position: relative;
            a{
                cursor: pointer;
                display: flex;
                align-items: center;
                font-size: 14px;
                div{
                    font-size: 26px;
                    width: 36px;
                }
                span{
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                }
            }
            &:hover{
                .pop{
                 transform: scaleY(1);   
                }
            }
            .pop{
                position: absolute;
                left: 0;
                bottom: 35px;
                padding: 10px 15px;
                background: #fff;
                border-radius: 5px;
                transform: scaleY(0);
                transform-origin: center bottom;
                transition: 0.3s;
                img{
                    width: 150px;height: 150px;
                }
            }
        }
    }
</style>