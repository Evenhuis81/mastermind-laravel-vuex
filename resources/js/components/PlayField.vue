<template>
    <table>
        <tbody>
            <!-- kies duidelijken variabelenamen, bijv. playerIndex ipv playerIndex -->
            <tr
                v-for="(currentArray, playerIndex) in playerSelect"
                :key="playerIndex"
            >
                <td v-show="playerIndex + 1 === playerSelect.length">
                    <h3>{{ "round " + (playerIndex + 1) + ":" }}</h3>
                </td>
                <td v-show="playerIndex + 1 !== playerSelect.length">
                    {{ "round " + (playerIndex + 1) + ":" }}
                </td>
                <td
                    v-for="(current, playerIndex2) in currentArray"
                    :key="playerIndex2 + 1000"
                >
                    {{ gimmeColor(current) }}
                </td>
                <td
                    v-show="
                        submitClearButtons(
                            currentArray,
                            playerSelect,
                            playerIndex
                        )
                    "
                >
                    <button @click="clearInput">Clear</button>
                </td>
                <td
                    v-show="
                        submitClearButtons(
                            currentArray,
                            playerSelect,
                            playerIndex
                        )
                    "
                >
                    <button @click="submitInput">Submit</button>
                </td>
                <td
                    v-show="makeChoice(currentArray, playerIndex)"
                    v-html="'<< CHOOSE ONE'"
                ></td>
                <td>
                    <span
                        v-for="(result, playerIndex3) in playerSet[playerIndex]"
                        :key="playerIndex3 + 2000"
                        v-html="getHexCode(result)"
                    ></span>
                </td>
            </tr>
        </tbody>
        <!-- verkorten naar 1 tfoot element en haal de boodschap uit een computed property van je component -->
        <tfoot v-show="$store.getters.nailedIt || $store.getters.lostIt">
            <tr>
                <td colspan="8">
                    <h1>
                        {{
                            $store.getters.nailedIt
                                ? "YOU GOT IT!"
                                : "YOU LOST!!"
                        }}
                    </h1>
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
