<template>
    <table>
        <tbody>
            <tr v-for="(currentArray, i1) in playerSelect" :key="i1">
                <td>
                    {{ currentArray.length ? "round " + (i1 + 1) + ":" : "" }}
                </td>
                <td v-for="(current, i2) in currentArray" :key="i2 + 1000">
                    {{ gimmeColor(current) }}
                </td>
                <td
                    v-show="
                        currentArray.length === 4 &&
                            playerSelect.length === i1 + 1
                    "
                >
                    <button @click="clearInput">Clear</button>
                </td>
                <td
                    v-show="
                        currentArray.length === 4 &&
                            playerSelect.length === i1 + 1
                    "
                >
                    <button @click="submitInput">Submit</button>
                </td>
                <td v-show="makeAChoice">
                    --- PRESS ONE OF THESE BUTTONS ---
                </td>
                <td v-for="(set, i3) in playerSet" :key="i3">
                    <span
                        v-for="(item, i4) in set"
                        :key="i4"
                        v-html="getHexCode(item)"
                    >
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        ...mapState([
            "playerSelect",
            "colorPalette",
            "makeAChoice",
            "playerSet"
        ])
    },
    methods: {
        getHexCode(item) {
            return `&#963${item}`;
        },
        gimmeColor(current) {
            return "{" + this.colorPalette[current] + "}";
        },
        clearInput() {
            this.$store.commit("chooseOff");
            this.$store.commit("clearRound");
        },
        submitInput() {
            this.$store.commit("chooseOff");
            this.$store.commit("roundResult");
        }
    }
};
</script>
