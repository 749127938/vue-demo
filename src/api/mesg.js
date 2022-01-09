import request from "./request";
// 获取留言
export async function getMesg(page = 1, limit = 10, keyword = '') {
    return await request.get('/api/message', {
        params: {
            page,
            limit,
            keyword
        }
    })
}

// 提交留言
export async function postMesg(commentInfo) {
    return await request.post('/api/message', commentInfo)
}