export default {
    state: {
        colorPalette: ["red", "blue", "white", "green", "black", "yellow"],
        solution: [],
        playerSelect: [[]],
        playerSet: [[3, 2]],
        msg: 0,
        gameStarted: false,
        makeAChoice: false
    },
    mutations: {
        roundResult(state) {
            state.playerSelect[state.playerSelect.length - 1].forEach(x => {
                console.log(x);
            });
        },
        choose(state) {
            state.makeAChoice = true;
        },
        chooseOff(state) {
            state.makeAChoice = false;
        },
        clearRound(state) {
            // state.playerSelect[state.playerSelect.length - 1] = [];
            Vue.set(state.playerSelect, state.playerSelect.length - 1, []);
        },
        startOrStopGame(state) {
            state.gameStarted = !state.gameStarted;
        },
        createSolution(state) {
            for (let index = 0; index < 4; index++) {
                state.solution.push(Math.floor(Math.random() * 6));
            }
        },
        incrementMsg() {
            this.state.msg++;
        },
        stopGame(state) {
            state.solution = [];
            state.playerSelect = [[]];
            state.msg = 0;
        },
        push(state, index) {
            state.playerSelect[state.playerSelect.length - 1].push(index);
        }
    },
    getters: {
        // arrayFull(state) {
        //     // return Math.sqrt(state.count);
        //     return
        // }
        arrayFull(state) {
            return (
                state.playerSelect[state.playerSelect.length - 1].length % 4 ===
                    0 &&
                state.playerSelect[state.playerSelect.length - 1].length != 0
            );
        },
        endRoundTen(state) {
            return state.playerSelect.length === 10;
        }
    }
    // actions: {
    //     pushPlayerSelect({ commit }, index) {
    //         commit("push", index);

    //     }
    // }
};
