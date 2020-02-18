<template>
    <table>
        <tbody>
            <tr v-for="(currentArray, i1) in playerSelect" :key="i1">
                <td v-show="i1 + 1 === playerSelect.length">
                    <h3>{{ "round " + (i1 + 1) + ":" }}</h3>
                </td>
                <td v-show="i1 + 1 !== playerSelect.length">
                    {{ "round " + (i1 + 1) + ":" }}
                </td>
                <td v-for="(current, i2) in currentArray" :key="i2 + 1000">
                    {{ gimmeColor(current) }}
                </td>
                <td v-show="submitClearButtons(currentArray, playerSelect, i1)">
                    <button @click="clearInput">Clear</button>
                </td>
                <td v-show="submitClearButtons(currentArray, playerSelect, i1)">
                    <button @click="submitInput">Submit</button>
                </td>
                <td
                    v-show="makeChoice(currentArray, i1)"
                    v-html="'<< CHOOSE ONE'"
                ></td>
                <td>
                    <span
                        v-for="(result, i3) in playerSet[i1]"
                        :key="i3 + 2000"
                        v-html="getHexCode(result)"
                    ></span>
                </td>
            </tr>
        </tbody>
        <tfoot v-show="$store.getters.nailedIt">
            <tr>
                <td colspan="8">
                    <h1>YOU GOT IT!!</h1>
                </td>
            </tr>
        </tfoot>
        <tfoot v-show="$store.getters.lostIt">
            <tr>
                <td colspan="8">
                    <h1>YOU LOST!!</h1>
                </td>
            </tr>
        </tfoot>
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
        submitClearButtons(current, select, index) {
            return (
                current.length === 4 &&
                select.length === index + 1 &&
                !this.$store.getters.nailedIt &&
                !this.$store.getters.lostIt
            );
        },
        makeChoice(current, index) {
            return this.makeAChoice && current.length === index + 1;
        },
        getHexCode(item) {
            return `&#963${item}`;
        },
        gimmeColor(current) {
            return "{" + this.colorPalette[current] + "}";
        },
        submitInput() {
            this.$store.commit("chooseOff");
            this.$store.commit("roundResult");
            if (this.$store.getters.lostIt) {
                return;
            }
            if (this.$store.getters.nailedIt) {
                return;
            }
            this.$store.commit("nextRound");
        },
        clearInput() {
            this.$store.commit("chooseOff");
            this.$store.commit("clearRound");
        }
    }
};
</script>
