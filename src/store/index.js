import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        isHeaderShow: true,
        isFooterShow: true,
    },
    mutations: {
        SHOW_HEADER(state) {
            state.isHeaderShow = true
        },
        HIDE_HEADER(state) {
            state.isHeaderShow = false
        },
        SHOW_FOOTER(state){
            state.isFooterShow = true
        },
        HIDE_FOOTER(state){
            state.isFooterShow = false
        }

    },
    actions: {
        HIDE_HEADER({commit}) {
            commit('HIDE_HEADER')
        },
        SHOW_HEADER({commit}) {
            commit('SHOW_HEADER')
        },
        HIDE_FOOTER({commit}){
            commit('HIDE_FOOTER')
        },
        SHOW_FOOTER({commit}){
            commit('SHOW_FOOTER')
        }
    },
    modules: {}
})
