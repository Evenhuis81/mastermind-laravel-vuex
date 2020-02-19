require("./bootstrap");

window.Vue = require("vue");
// import App from './App.vue'
// import router from './router.js'
// import vuetify from './vuetify.js';

import Vuex from "vuex";
Vue.use(Vuex);

Vue.config.productionTip = false;

import store from "./store";

// registreer components bij voorkeur lokaal ipv globaal zodat ze niet per definitie in de final build ge-inlcude worden
// voor meer info over component registratie zie: https://vuejs.org/v2/guide/components-registration.html
Vue.component("mastermindTitel", require("./components/Titel.vue").default);    // gebruik bij voorkeur gelijke component en file names om zoeken naar bronbestanden zo eenvoudig mogelijk te houden
Vue.component("startReset", require("./components/StartReset.vue").default);
Vue.component(
    "layoutSummary",
    require("./components/LayoutSummary.vue").default
);
Vue.component("colorPalette", require("./components/ColorPalette.vue").default);
Vue.component("play-field", require("./components/PlayField.vue").default);
Vue.component("end-score", require("./components/Score.vue").default);
Vue.component("high-scores", require("./components/HighScores.vue").default);

const app = new Vue({
    el: "#app",
    store: new Vuex.Store(store),

    computed: {
        show() {
            return this.$store.state.solution.length;
        }
    },
    mounted() {
        this.$store.dispatch("setHighScores");
        this.$store.dispatch("setMessages");
        this.$store.dispatch("setOrdinals");
    }
});

// ongebruikte commentaren weglaten of in aparte Git branch zetten
// new Vue({
//     router,
//     vuetify,
//     render: h => h(App)
//   }).$mount('#root')
