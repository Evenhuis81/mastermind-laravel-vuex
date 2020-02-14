<template>
    <div class="container">
        {{ count }} (The square root of this number is {{ sqrt }})

        <p>
            <button @click="increment">+1</button>
        </p>
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
    computed: {
        ...mapState(["count"]),
        ...mapGetters(["sqrt"])
    },

    methods: {
        ...mapActions(["increment"])
    }
};
</script>
