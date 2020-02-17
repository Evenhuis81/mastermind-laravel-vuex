require("./bootstrap");

window.Vue = require("vue");
// import App from './App.vue'
// import router from './router.js'
// import vuetify from './vuetify.js';

import Vuex from "vuex";
Vue.use(Vuex);

Vue.config.productionTip = false;

import store from "./store";

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component("counter", require("./components/Counter.vue").default);
// Vue.component("other", require("./components/Other.vue").default);
// Vue.component("answer-now", require("./components/Answer.vue").default);
Vue.component("mastermindTitel", require("./components/Titel.vue").default);
Vue.component("startReset", require("./components/StartReset.vue").default);
Vue.component(
    "layoutSummary",
    require("./components/LayoutSummary.vue").default
);
Vue.component("colorPalette", require("./components/ColorPalette.vue").default);
Vue.component("roundNumber", require("./components/Round.vue").default);
Vue.component("play-field", require("./components/PlayField.vue").default);
Vue.component("final-solution", require("./components/Solution.vue").default);
Vue.component("end-score", require("./components/Score.vue").default);
Vue.component("high-scores", require("./components/HighScores.vue").default);
// Vue.component("gamerulez", require("./components/GameRulez.vue").default);

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
        this.$store.dispatch("setMessages")
    }
});

// new Vue({
//     router,
//     vuetify,
//     render: h => h(App)
//   }).$mount('#root')
