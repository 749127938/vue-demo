import request from "./request";
export default async function() {
    return await request.get('/api/setting');
}