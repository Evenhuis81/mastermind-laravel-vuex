<template>
    <div v-show="$store.getters.nailedIt">
        <h1>Your Score: {{ $store.getters.endScore }}</h1>
        <form
            v-show="$store.getters.newHighScore && $store.state.showNewScore"
            @submit.prevent="checkForm"
            action="/setscore"
            method="post"
            @keydown="errors.clear($event.target.name)"
        >
            <h1>This is a new HighScore!!</h1>
            <label for="inputName">Enter Your Name</label>
            <input
                id="inputName"
                name="name"
                maxlength="3"
                size="3"
                v-model="name"
                @keydown="errors.clear('name')"
            />
            <button type="submit" :disabled="errors.any()">Submit</button>
            <span v-if="errors.has('name')" v-text="errors.get('name')"></span>
        </form>
    </div>
</template>

<script>
class Errors {
    constructor() {
        this.errors = {};
    }

    has(field) {
        return this.errors.hasOwnProperty(field);
    }

    any() {
        return Object.keys(this.errors).length > 0;
    }

    get(field) {
        if (this.errors[field]) {
            return this.errors[field][0];
        }
    }

    record(errors) {
        this.errors = errors;
    }

    clear(field) {
        delete this.errors[field];
    }
}

export default {
    data() {
        return {
            name: "",
            errors: new Errors()
        };
    },
    methods: {
        checkForm() {
            axios
                .post("/setscore", {
                    name: this.name,
                    score: this.$store.getters.newHighScore
                })
                .then(this.onSuccess)
                .catch(error => this.errors.record(error.response.data.errors));
        },
        onSuccess(response) {
            // resetStuff = empty highScores and set showNewScore to false
            this.$store.commit("resetStuff");
            this.$store.dispatch("setHighScores");
        }
    }
};
</script>
