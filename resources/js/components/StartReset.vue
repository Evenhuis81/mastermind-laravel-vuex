<template>
    <div>
        <button @click="start" v-show="!gameStarted">
            Start New Game
        </button>
        <button @click="stop" v-show="gameStarted">Stop Game</button>
        <br />
        <br />
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    methods: {
        start() {
            this.$store.commit("startOrStopGame");
            this.$store.commit("createSolution");
        },
        stop() {
            this.$store.commit("startOrStopGame");
            this.$store.commit("stopGame");
        }
    },
    computed: {
        ...mapState(["gameStarted"])
    }
};
</script>
