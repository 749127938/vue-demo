import axios from "axios";
import showMessage from "@/utils/showMessage";
const ins = axios.create(); // 创建一个axios实例
// 拦截请求的响应 请求完成后return出去的数据会返回axios请求体
ins.interceptors.response.use(function(response) {
    if (response.data.code !== 0) {
        // 如果请求返回结果不是成功的就弹出错误信息
        showMessage({
            content: "错误信息",
            duration: 2000,
            type: 'error'
        });
        return null;
    }
    return response.data.data
});


export default ins;