<template>
    <div>
        <br />
        <!-- loze comments verwijderen -->
        <!-- <em>{{ msg[msgNr] ? msg[msgNr] : msg[7] }}</em> -->
        <!-- hard-coded indexen proberen te vermijden ivm foutgevoeligheid -->
        <em v-html="messages[msgNr] ? messages[msgNr] : messages[7]"></em>
        <br />
    </div>
</template>
<script>
import { mapState } from "vuex";

export default {
    computed: {
        msgNr() {
            return this.$store.getters.count;
        },
        ...mapState(["messages"])
    }
};
</script>
