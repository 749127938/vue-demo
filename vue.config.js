// vue-cli配置文件
module.exports = {
    devServer: {
        proxy: {
            // 只要路径是api我们就把请求源改为target
            "/api": {
                target: 'https://study.duyiedu.com/'
            }
        }
    }
}