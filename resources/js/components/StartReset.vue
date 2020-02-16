<template>
    <div>
        <button @click="$store.commit('startGame')" v-show="!gameStarted">
            Start New Game
        </button>
        <button @click="$store.commit('stopGame')" v-show="gameStarted">Stop Game</button>
        <br />
        <br />
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    methods: {
        // start() {
        //     this.$store.commit("createSolution");
        // },
        // stop() {
        //     this.$store.commit("stopGame");
        // }
    },
    computed: {
        // ...mapState(["gameStarted"])
        gameStarted() {
            return this.$store.state.solution.length && !this.$store.getters.nailedIt && !this.$store.getters.lostIt
        }
    }
};
</script>
