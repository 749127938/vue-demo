import request from './request';
// 获取文章分类
export async function getBlogType() {
    return await request('/api/blogtype');
}

// 获取文章列表
export async function getBlog(page = 1, limit = 10, categoryId = -1) {
    //(categoryId, page, limit);
    return await request('/api/blog', {
        params: {
            page, // 第几页
            limit, // 每页显示多少
            categoryId // 分类ID
        }
    });
}

// 获取单个文章
export async function getBlogId(id) {
    return await request(`/api/blog/${id}`, {
        params: {
            id
        }
    });
}

// 提交文章评论
export async function postBlog(commentInfo) {
    return await request.post('/api/comment', commentInfo)
}

// 分页获取评论
export async function getBlogComment(blogId, page = 1, limit = 10) {
    return await request.get('/api/comment', {
        params: {
            blogId,
            page,
            limit,
        }
    })
}