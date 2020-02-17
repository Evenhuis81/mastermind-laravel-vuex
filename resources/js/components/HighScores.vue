<template>
    <table v-if="$store.getters.nailedIt">
        <thead>
            <tr>
                <td colspan="4"><h3>High Scores</h3></td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(place, index) in places" :key="index">
                <td v-html="place + smallFiller"></td>
                <td>
                    <b>{{ highScores[index].name }}</b>
                </td>
                <td v-html="smallFiller"></td>
                <td>points: <b>{{ highScores[index].score }}</b></td>
                <td>
                    <small v-html="filler + highScores[index].created_at.slice(0,10)"></small>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { mapState } from "vuex";

export default {
    data() {
        return {
            places: [
                "1st",
                "2nd",
                "3rd",
                "4th",
                "5th",
                "6th",
                "7th",
                "8th",
                "9th",
                "10th"
            ]
        };
    },
    computed: {
        smallFiller() {
            return `&nbsp&nbsp&nbsp&nbsp`;
        },
        filler() {
            return `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`;
        },
        ...mapState(["highScores"])
    }
};
</script>
