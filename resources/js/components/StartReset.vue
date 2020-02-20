<template>
    <div>
        <!-- schrijf event-handlers in je methods blok van je component zodat deze hergebruikt kunnen worden, maakt code ook leesbaarder en beter te debuggen -->
        <button @click="$store.commit('startGame')" v-show="!gameStarted">
            Start New Game
        </button>
        <button @click="$store.commit('stopGame')" v-show="gameStarted">
            Stop Game
        </button>
        <br />
        <br />
    </div>
</template>

<script>
// mapState import kan verwijderd worden want wordt niet gebruikt

export default {
    // leeg methods blok kan verwijderd worden
    computed: {
        gameStarted() {
            return (
                this.$store.state.solution.length &&
                !this.$store.getters.nailedIt &&
                !this.$store.getters.lostIt
            );
        }
    }
};
</script>
