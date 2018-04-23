// Internal Functions
import {generateRandomArray, updateArrayOnClick} from '../utils/array.js'
import {isGameCompleted} from '../utils/gameover.js'

const gameReducer = (state = {
    lights: generateRandomArray(),
    moves: 0,
    gameCompleted: false
}, action) => {
    switch (action.type) {
        case "CLICKED":
            return {
                lights: updateArrayOnClick(state.lights, action.row, action.column),
                moves: state.moves + 1,
                gameCompleted: isGameCompleted(state.lights)
            };
        case "RESTART":
            return {
                lights: generateRandomArray(),
                moves: 0,
                gameCompleted: false
            };
        case "GAMEOVER":
            return {
                lights: generateRandomArray(),
                moves: 0,
                gameCompleted: false
            };
    }
    return state;
};

export default gameReducer;