import setting from "@/api/setting";
import { setTitle } from '@/utils'
export default {
    namespaced: true, // 开启需要加路径访问
    state: {
        data: null,
        loading: false
    },
    mutations: {
        setData(state, pyload) {
            state.data = pyload;
        },
        setLoading(state, loading) {
            state.loading = loading;
        }
    },
    actions: {
        async getSetting(ctx) {
            if (ctx.state.data) {
                // 当数据不为空设置
                return
            }
            ctx.commit('setLoading', true);
            const resp = await setting();
            ctx.commit('setData', resp);
            ctx.commit('setLoading', false);
            setTitle.setDomTitle(ctx.state.data.siteTitle);
            // <link rel="shortcut icon" href="/favicon.ico" />
            let link = document.querySelector('link[rel="shortcut icon"]');
            if (link) {
                return;
            }
            link = document.createElement('link');
            link.rel = 'shortcut icon';
            link.href = resp.favicon;
            document.head.appendChild(link)
            console.log(link);
        }
    }
}