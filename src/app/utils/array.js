import React, {Component} from 'react';

export const generateRandomArray = () => {
    const lights = new Array(5);
    for (var i = 0; i < lights.length; i++) {
        lights[i] = new Array(5);
        for (var j = 0; j < lights[i].length; j++) {
            lights[i][j] = Math.random() >= 0.5;
        }
    }
    return lights;
}

export const updateArrayOnClick = (lights, i, j) => {
    let lights_len = lights.length;

    //toggle current
    lights[i][j] = !lights[i][j];

    //toggle left
    if (j != 0) {
        lights[i][j - 1] = !lights[i][j - 1];
    }
    //toggle right
    if (j != lights_len - 1) {
        lights[i][j + 1] = !lights[i][j + 1];
    }
    //toggle top
    if (i != 0) {
        lights[i - 1][j] = !lights[i - 1][j];
    }
    //toggle bottom
    if (i != lights_len - 1) {
        lights[i + 1][j] = !lights[i + 1][j];
    }

    return lights;
}