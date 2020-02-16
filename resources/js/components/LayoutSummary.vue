<template>
    <div>
        <br />
        <!-- <em>{{ msg[msgNr] ? msg[msgNr] : msg[7] }}</em> -->
        <em v-html="msg[msgNr] ? msg[msgNr] : msg[7]"></em>
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
                this.uniHexCode(2) + " = right color on right place, " + this.uniHexCode(3)  + " = right color on wrong place",
                "You have 10 rounds to find the right combination...",
                "The faster you get it right, the higher your score!",
                "Good luck and have fun!"
            ]
        }
    },
    computed: {
        msgNr() {
            return this.$store.getters.count
        },
        // uniHexCode(code) {
        //     return `&#963${code}`;
    },
    methods: {
        uniHexCode(item) {
            return `&#963${item}`;
        }
    }
}
</script>
