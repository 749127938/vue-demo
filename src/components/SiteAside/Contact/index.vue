<template>
        <ul class="contact-cantainer">
            <li>
                <a href="https://developer.duyiedu.com/home">
                    <div>
                         <Icon type="github" />
                    </div>
                    <span>Duyi-Edu</span>
                </a>
                
            </li>
            <li>
               <a href="mailto:749127938@qq.com">
                    <div>
                         <Icon type="mail" />
                    </div>
                    <span>749127938@qq.com</span>
                </a>
            </li>
            <li>
               <a href="tencent://message/?Menu=yes&uin=749127938&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45">
                    <div>
                         <Icon type="qq" />
                    </div>
                    <span>749127938</span>
                </a>
                <div class='pop'>
                    <img src="https://developer.duyiedu.com/img/wexin.jpg" alt="">
                </div>
            </li>
            <li>
               <a href="">
                    <div>
                         <Icon type="weixin" />
                    </div>
                    <span>Clear_Poor</span>
                </a>
                <div class='pop'>
                    <img src="https://developer.duyiedu.com/img/wexin.jpg" alt="">
                </div>
            </li>
        </ul>
</template>

<script>
    import Icon from "../../Icon";// 导入图标组件
    export default {
        // 注册Icon组件
        components: {
            Icon
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