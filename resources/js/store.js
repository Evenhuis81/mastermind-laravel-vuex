export default {
    state: {
        colorPalette: ["red", "blue", "white", "green", "black", "yellow"],
        solution: [],
        playerSelect: [[]],
        playerSet: [[]],
        makeAChoice: false,
        highScores: []
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
        pushColor(state, index) {
            state.playerSelect[state.playerSelect.length - 1].push(index);
        },
        nextRound(state) {
            state.playerSelect.push([]);
            state.playerSet.push([]);
        }
    },
    getters: {
        newHighScore(state) {
            let currentScores = [];
            state.highScores.forEach(x => currentScores.push(x.score));
            return (
                110 - state.playerSet.length * 10 > Math.min(...currentScores)
            );
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
        getHighScores({ state }) {
            return axios.get("/scores").then(
                response => {},
                error => {}
            );
        }
    }
};
