import request from './request';
async function getNew() {
    const resp = await request.get('/api/news');
    // console.log(resp);
    return resp
}
getNew()