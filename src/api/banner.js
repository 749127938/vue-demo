// fetch("http://api.ul6.cc/api/girls?type=json").then(data => data.json()).then(date => {  //(date) })
import request from "./request";
const url = "/api/banner";
async function getNews() {
    const resp = await request.get(url);
    return resp;
}
export default getNews;