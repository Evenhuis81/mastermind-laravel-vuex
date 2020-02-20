<template>
    <div>
        <br />
        <!-- loze comments verwijderen -->
        <!-- hard-coded indexen proberen te vermijden ivm foutgevoeligheid -->
        <em
            v-html="
                messages[msgNr]
                    ? messages[msgNr]
                    : messages[messages.length - 1]
            "
        ></em>
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
