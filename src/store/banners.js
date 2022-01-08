import banner from '@/api/banner'

export default {
    namespaced: true,
    state: {
        data: [],
        isLoading: false,
    },
    mutations: {
        setData(state, payload) {
            state.data = payload;
        },
        setLoading(state, payload) {
            state.isLoading = payload;
        }
    },
    actions: {
        async getBanner(ctx, payload) {
            if (ctx.state.data.length) {
                return;
            }
            ctx.commit('setLoading', true);
            const resp = await banner();
            ctx.commit('setData', resp)
            ctx.commit('setLoading', false);
        }
    }
}