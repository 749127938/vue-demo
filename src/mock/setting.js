import Mock from "mockjs";
Mock.mock('/api/setting', 'get', {
    code: 0,
    msg: "",
    data: {
        avatar: "https://q.qlogo.cn/g?b=qq&nk=749127938&s=640",
        siteTitle: "我的个人空间",
        github: "https://github.com/DuYi-Edu",
        qq: "749127938",
        qqQrCode: "https://q.qlogo.cn/g?b=qq&nk=749127938&s=640",
        weixin: "Clear_Poor",
        weixinQrCode: "https://q.qlogo.cn/g?b=qq&nk=749127938&s=640",
        mail: "749127938@qq.com",
        icp: "赣ICP备2021003164号-1",
        githubName: "DuYi-Edu",
        favicon: "http://mdrs.yuanjin.tech/Fs4CDlC6mwe_WXLMIiXcmSJLHO4f",
    }
})