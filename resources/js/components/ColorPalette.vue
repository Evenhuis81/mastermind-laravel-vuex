<template>
    <div>
        <p>--------------------------------------------------------------</p>
        <span
            v-for="(color, colorCode) in colorPalette"
            :key="colorCode"
            @click="setColor(colorCode)"
            >[ {{ color }} ] {{ " " }}</span
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
        setColor(colorCode) {
            if (this.$store.getters.nailedIt || this.$store.getters.lostIt) {
                return;
            }
            // je zou de huidig ingevoerde kleurcode in dit component kunnen opslaan en pas comitten naar de store zodra men op de submit-knop drukt.
            // submit knop is alleen zichtbaar indien aantal ingevoerde kleuren gelijk aan 4
            if (this.playerSelect[this.playerSelect.length - 1].length === 4) {
                this.$store.commit("chooseOn");
                return;
            }
            // loze commentaren verwijderen
            // geen index gebruiken want foutgevoelig en onnodig, commit pas als hele code ingevoerd is, zonder index
            this.$store.commit("pushColor", colorCode);
        }
    }
};
</script>
