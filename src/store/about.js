import about from '@/api/about'
export default {
    namespaced: true,
    state: {
        data: null,
        isLoading: false
    },
    mutations: {
        setLoading(state, payload) {
            state.isLoading = payload;
        },
        setData(state, payload) {
            state.data = payload;
        }
    },
    actions: {
        async fetchAbout(ctx) {
            if (ctx.data) {
                // 如果有值直接返回
                return;
            }
            ctx.commit('setLoading', true);
            const resp = await about();
            console.log(resp);
            ctx.commit('setData', resp);
            ctx.commit('setLoading', false);
        }
    }
}