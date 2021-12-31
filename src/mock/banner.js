import Mock from "mockjs";
Mock.mock("/api/banner", "get", {
    code: 0,
    msg: "我也不知道什么错误",
    data: [{
            id: "1",
            midImg: "https://cdn.inis.cc/comm/assets/images/bg/21.jpg",
            bigImg: "https://cdn.inis.cc/comm/assets/images/bg/21.jpg",
            title: "轮播1",
            description: "错过了就错过了,再追回来天色也不对",
        },
        {
            id: "2",
            midImg: "https://cdn.inis.cc/comm/assets/images/bg/30.jpg",
            bigImg: "https://cdn.inis.cc/comm/assets/images/bg/30.jpg",
            title: "轮播2",
            description: "沉舟侧畔千帆过，病树前头万木春",
        },
        {
            id: "3",
            midImg: "https://cdn.inis.cc/comm/assets/images/bg/24.jpg",
            bigImg: "https://cdn.inis.cc/comm/assets/images/bg/24.jpg",
            title: "轮播3",
            description: "爱你所爱，行你所行，听从你心，无问西东",
        },
    ],
});