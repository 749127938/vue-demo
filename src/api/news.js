import request from './request';
async function getNew() {
    const resp = await request.get('/api/news');
    //  //(resp);
    return resp
}
getNew()