import React, {Component} from 'react';

export const generateRandomArray = () => {
    //generates a 2D array of random boolean values
    //only called on game restart or gameover

    let squares = new Array(5).fill(null).map((row) => {
        let random = new Array(5).fill(null).map((column) => {
            return Math.random() >= 0.5;
        });
        return random;
    });
    return squares;
}

export const updateArrayOnClick = (squares, i, j) => {
    //toggles appropriate squares on the grid board based on the selected square
    //called each time a square is clicked

    //toggle current
    squares[i][j] = !squares[i][j];

    //toggle left
    if (j != 0) {
        squares[i][j - 1] = !squares[i][j - 1];
    }
    //toggle right
    if (j != squares.length - 1) {
        squares[i][j + 1] = !squares[i][j + 1];
    }
    //toggle top
    if (i != 0) {
        squares[i - 1][j] = !squares[i - 1][j];
    }
    //toggle bottom
    if (i != squares.length - 1) {
        squares[i + 1][j] = !squares[i + 1][j];
    }

    return squares;
}