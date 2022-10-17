import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vue.Store({
    state: {
        apiURL: 'http://localhost:8000/api',
        serverPath: 'http://localhost:8000'
    },
    mutation: {},
    action:{}
});