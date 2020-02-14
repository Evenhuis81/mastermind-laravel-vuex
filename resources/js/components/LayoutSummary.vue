<template>
    <div>
        <br />
        <em>{{ msg[count] }}</em>
        <br />
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: [
                "Click on a color:",
                "Set 4 colors per round, ",
                "Duplicates are allowed",
                "After each round you can check the result",
                "+ = right color on right place, - = right color on wrong place",
                "You have 10 rounds to find the right combination...",
                "The faster you get it right, the higher your score!",
                "Good luck and have fun!"
            ]
        };
    },
    computed: {
        count() {
            return this.$store.state.msg;
        }
    }
};
</script>
