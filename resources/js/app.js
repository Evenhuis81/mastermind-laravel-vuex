require("./bootstrap");

window.Vue = require("vue");

import Vuex from "vuex";
Vue.use(Vuex);

Vue.config.productionTip = false;

import store from "./store";
import App from "./App.vue";
// registreer components bij voorkeur lokaal ipv globaal zodat ze niet per definitie in de final build ge-inlcude worden
// voor meer info over component registratie zie: https://vuejs.org/v2/guide/components-registration.html
// Vue.component("mastermindTitel", require("./components/MastermindTitel.vue").default); // gebruik bij voorkeur gelijke component en file names om zoeken naar bronbestanden zo eenvoudig mogelijk te houden

const app = new Vue({
    store: new Vuex.Store(store),
    mounted() {
        this.$store.dispatch("setHighScores");
        // this.$store.commit("pushOrdinals");
    },
    render: h => h(App)
}).$mount("#root");
