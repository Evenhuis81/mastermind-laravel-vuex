<template>
    <div>
        <p>--------------------------------------------------------------</p>
        <span
            v-for="(color, index) in colorPalette"
            :key="index"
            @click="setColor(index)"
            >[ {{ color }} ]&nbsp</span
        >
        <p>--------------------------------------------------------------</p>
    </div>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState(["colorPalette", "msg", "playerSelect"])
    },
    methods: {
        setColor(index) {
            if (this.playerSelect[this.playerSelect.length - 1].length === 4) {
                this.$store.commit("choose");
                return;
            }
            if (this.msg < 7) {
                this.$store.commit("incrementMsg");
            }
            // this.$store.dispatch("pushPlayerSelect", index);
            this.$store.commit("push", index);
            if (this.$store.getters.arrayFull) {
                if (this.$store.getters.endRoundTen) {
                    console.log("the end");
                } else {
                    // this.playerSelect.push([]);
                }
            }
        }
    }
};
</script>
