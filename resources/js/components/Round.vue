<template>
    <h3>
        <u>Round {{ round }}</u>
    </h3>
</template>

<script>
export default {
    computed: {
        round() {
            return this.$store.state.playerSelect.length;
        }
    }
};
</script>
