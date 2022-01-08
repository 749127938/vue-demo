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
            ctx.commit('setLoading', true);
            const resp = await setting();
            ctx.commit('setData', resp);
            ctx.commit('setLoading', false);
            if (resp.siteTitle) {
                // 当数据不为空设置
                setTitle.setDomTitle(ctx.state.data.siteTitle)
            }
        }
    }
}