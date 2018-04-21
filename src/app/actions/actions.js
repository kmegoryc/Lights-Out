export function squareClicked(i, j) {
    return {
        type: "CLICKED", 
        row: i, 
        column: j
    };
}

export function restartGame() {
    return {
        type: "RESTART"
    };
}

export function handleGameCompleted() {
    return {
        type: "GAMEOVER"
    };
}

