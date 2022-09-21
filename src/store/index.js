import {createStore} from 'vuex';
import app from "@/store/modules/app";
import getters from "@/store/getters";

const store = createStore({
    modules: {
        app
    },
    getters
})
export default store