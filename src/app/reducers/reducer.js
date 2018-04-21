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
            state = {
                ...state,
                lights: updateArrayOnClick(state.lights, action.row, action.column),
                moves: state.moves + 1,
                gameCompleted: isGameCompleted(state.lights)
            };
            break;
        case "RESTART":
            state = {
                ...state,
                lights: generateRandomArray(),
                moves: 0
            };
            break;
        case "GAMEOVER":
            state = {
                ...state,
                lights: generateRandomArray(),
                moves: 0,
                gameCompleted: false
            };
            break;
    }
    return state;
};

export default gameReducer;