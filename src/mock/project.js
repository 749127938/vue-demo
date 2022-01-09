import Mock from "mockjs";
Mock.mock("/api/project", 'get', {
    code: 0,
    msg: "",
    "data|5": [{
        'id|+1': 1,
        'name': "@ctitle",
        'url|1': "[@url,null]",
        'github': "[@url,null]",
        'description': ["@paragraph(1,2)", "@paragraph(1,3)"],
        'thumb': "https://cdn.inis.cc/comm/assets/images/bg/30.jpg",
        'order': '@id'
    }, ]
})