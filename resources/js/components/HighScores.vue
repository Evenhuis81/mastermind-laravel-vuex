<template>
    <table v-if="$store.getters.nailedIt">
        <thead>
            <tr>
                <td colspan="4"><h3>High Scores</h3></td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(highScore, index) in highScores" :key="index">
                <td v-html="ordinals[index] + smallFiller"></td>
                <td>
                    <b>{{ highScore.name }}</b>
                </td>
                <td v-html="smallFiller"></td>
                <td>
                    points: <b>{{ highScore.score }}</b>
                </td>
                <td>
                    <small
                        v-html="filler + highScore.created_at.slice(0, 10)"
                    ></small>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapState } from "vuex";

export default {
    computed: {
        // kolombreedtes met css instellen zodat onderstaande twee computed properties verwijderd kunnen worden
        smallFiller() {
            return `&nbsp&nbsp&nbsp&nbsp`;
        },
        filler() {
            return `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`;
        },
        ...mapState(["highScores", "ordinals"])
    }
};
</script>
