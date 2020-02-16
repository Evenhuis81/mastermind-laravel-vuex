<template>
    <div>
        <p>--------------------------------------------------------------</p>
        <span
            v-for="(color, index) in colorPalette"
            :key="index"
            @click="setColor(index)"
            >[ {{ color }} ] {{ ' ' }}</span
        >
        <p>--------------------------------------------------------------</p>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["colorPalette", "playerSelect"])
    },
    methods: {
        setColor(index) {
            if (this.$store.getters.nailedIt || this.$store.getters.lostIt) {
                return;
            }
            if (this.playerSelect[this.playerSelect.length - 1].length === 4) {
                this.$store.commit("chooseOn");
                return;
            }
            // this.$store.dispatch("pushPlayerSelect", index);
            this.$store.commit("pushColor", index);
            // if (this.$store.getters.arrayFull) {
            //     if (this.$store.getters.endRoundTen) {
            //         console.log("the end");
            //     } else {
            //         // this.playerSelect.push([]);
            //     }
            // }
        }
    }
};
</script>
