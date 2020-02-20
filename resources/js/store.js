export default {
    state: {
        colorPalette: ["red", "blue", "white", "green", "black", "yellow"],
        solution: [],
        playerSelect: [[]], // "turns" is duidelijkere naam
        playerSet: [[]],
        makeAChoice: false,
        highScores: [],
        messages: [
            "Click on a color:",
            "Set 4 colors per round, ",
            "Duplicates are allowed",
            "After each round you can check the result",
            "&#9633 = right color on right place, &#9632 = right color on wrong place",
            "You have 10 rounds to find the right combination...",
            "The faster you get it right, the higher your score!",
            "Good luck and have fun!"
        ],
        ordinals: ["1st", "2nd", "3rd"],
        showNewScore: true
    },
    mutations: {
        roundResult(state) {
            let copyOfPlayerSelect = state.playerSelect[
                state.playerSelect.length - 1
            ].slice();
            let copyOfSolution = state.solution.slice();
            for (let k = 0; k < 4; k++) {
                if (copyOfPlayerSelect[k] === copyOfSolution[k]) {
                    state.playerSet[state.playerSet.length - 1].push(2);
                    copyOfPlayerSelect[k] = null;
                    copyOfSolution[k] = null;
                }
            }
            let newCopyOfSolution = copyOfSolution.filter(n => n != null);
            let newCopyOfPlayerSelect = copyOfPlayerSelect.filter(
                x => x != null
            );
            if (state.playerSet[state.playerSet.length - 1].length === 4) {
                return;
            }
            for (let i = 0; i < newCopyOfPlayerSelect.length; i++) {
                for (let j = 0; j < newCopyOfPlayerSelect.length; j++) {
                    if (newCopyOfPlayerSelect[i] === newCopyOfSolution[j]) {
                        state.playerSet[state.playerSet.length - 1].push(3);
                        newCopyOfSolution[j] = null;
                    }
                }
            }
        },
        chooseOn(state) {
            state.makeAChoice = true;
        },
        chooseOff(state) {
            state.makeAChoice = false;
        },
        clearRound(state) {
            // state.playerSelect[state.playerSelect.length - 1] = [];
            Vue.set(state.playerSelect, state.playerSelect.length - 1, []);
        },
        startGame(state) {
            state.showNewScore = true;
            state.solution = [];
            state.playerSelect = [[]];
            state.playerSet = [[]];
            for (let index = 0; index < 4; index++) {
                state.solution.push(Math.floor(Math.random() * 6));
            }
            console.log(state.solution);
        },
        stopGame(state) {
            state.solution = [];
            state.playerSelect = [[]];
            state.playerSet = [[]];
        },
        resetStuff(state) {
            state.showNewScore = false;
            state.highScores = [];
        },
        pushColor(state, colorCode) {
            state.playerSelect[state.playerSelect.length - 1].push(colorCode);
        },
        nextRound(state) {
            state.playerSelect.push([]);
            state.playerSet.push([]);
        },
        // deze messages zijn hard-coded, dus rechtstreeks aan state toekennen,
        // niet via actions / mutations
        pushHighScores(state, payload) {
            state.highScores = payload;
            // bovenstaande code kan eenvoudiger
        },
        // deze ordinals zijn hard-coded, dus rechtstreeks aan state toekennen,
        // niet via actions / mutations
        pushOrdinals(state) {
            let i = 3;
            let times_to_run = i + 7;
            while (i++ < times_to_run) {
                state.ordinals.push(i + "th");
            }
        }
    },
    getters: {
        newHighScore(state) {
            let currentScores = [];
            state.highScores.forEach(x => currentScores.push(x.score));
            let newScore = 110 - state.playerSet.length * 10;
            if (newScore > Math.min(...currentScores)) {
                return newScore;
            } else {
                return false;
            }
        },
        endScore(state) {
            return 110 - state.playerSet.length * 10;
        },
        nailedIt(state) {
            let count = 0;
            state.playerSet[state.playerSet.length - 1].forEach(x => {
                if (x === 2) {
                    count++;
                }
            });
            return count === 4;
        },
        lostIt(state) {
            return state.playerSet.length === 10;
        },
        count(state) {
            let y = 0;
            state.playerSelect.forEach(x => {
                y += x.length;
            });
            return y;
        },
        arrayFull(state) {
            return (
                state.playerSelect[state.playerSelect.length - 1].length % 4 ===
                    0 &&
                state.playerSelect[state.playerSelect.length - 1].length != 0
            );
        }
    },
    actions: {
        // geen synchrone actions toepassen
        // geen synchrone actions toepassen
        setHighScores({ commit }) {
            axios
                .get("/scores")
                .then(response => {
                    commit("pushHighScores", response.data);
                })
                .catch(error => {
                    console.log(error);
                });
            // loze then() code verwijderen, evt. promise returnen vanuit deze action zodat component dat deze action aanroept kan wachten op reactie
        }
    }
};
