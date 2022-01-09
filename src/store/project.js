import getProject from '@/api/project';
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
        async getProject(ctx) {
            console.log(ctx.state.data);
            if (!!ctx.state.data) {
                return;
            }
            ctx.commit('setLoading', true);
            const resp = await getProject();
            ctx.commit('setLoading', false);
            ctx.commit('setData', resp)
            console.log(resp);
        }
    }
}