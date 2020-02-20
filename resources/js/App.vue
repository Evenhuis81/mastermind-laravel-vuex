<template>
    <!-- v-content tags verwijderen als deze niet gebruikt worden -->
    <div>
        <h1>
            <em><u>MASTERMIND</u></em>
        </h1>
        <!-- zet onderstaande components in een aparte Vue page en laat deze div container leeg -->
        <start-reset></start-reset>
        <layout-summary v-show="show"></layout-summary>
        <color-palette v-show="show"></color-palette>
        <play-field v-show="show"></play-field>
        <!-- onderstaand component is nergens geregistreerd -->
        <end-score></end-score>
        <high-scores></high-scores>
    </div>
</template>

<script>
import startReset from "./components/StartReset.vue";
import layoutSummary from "./components/LayoutSummary";
import colorPalette from "./components/ColorPalette";
import playField from "./components/PlayField";
import endScore from "./components/EndScore";
import highScores from "./components/HighScores";

export default {
    // data sectie verwijderen als deze toch niet gebruikt wordt
    components: {
        startReset,
        layoutSummary,
        colorPalette,
        playField,
        endScore,
        highScores
    },
    computed: {
        show() {
            return this.$store.state.solution.length;
        }
    }
};
</script>
