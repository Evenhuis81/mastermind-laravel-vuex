<template>
    <div v-show="$store.getters.nailedIt">
        <h1>Your Score: {{ $store.getters.endScore }}</h1>
        <form
            v-show="$store.getters.newHighScore"
            @submit="checkForm"
            action="/setscore"
            method="post"
        >
            <h1>This is a new HighScore!!</h1>
            <label for="inputName">Enter Your Name</label>
            <input id="inputName" name="name" maxlength="3" size="3" />
            <button type="submit">submit</button>
        </form>
    </div>
</template>

<script>
export default {
    methods: {
        checkForm(e) {
            return true;
            e.preventDefault();
        }
    }
};
</script>
